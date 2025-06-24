using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DailyActivityRecord.Server.Data;
using DailyActivityRecord.Server.Models;
using DailyActivityRecord.Server.Services;
using DailyActivityRecord.Server.DTOs;
using BCrypt.Net;

namespace DailyActivityRecord.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly JwtService _jwtService;

    public AuthController(AppDbContext context, JwtService jwtService)
    {
        _context = context;
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto request)
    {
        var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == request.Username);
        if (existingUser != null)
            return BadRequest("Username already taken.");

        var user = new User
        {
            Username = request.Username,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Role = "Parent", // Default role
            HasSubscription = false
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("User registered successfully.");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto request)
    {
        var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == request.Username);
        if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
        {
            return Unauthorized("Invalid credentials.");
        }

        var token = _jwtService.GenerateToken(user);
        return Ok(new { token });
    }
}
