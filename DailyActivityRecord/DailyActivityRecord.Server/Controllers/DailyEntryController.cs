using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DailyActivityRecord.Server.Models;
using DailyActivityRecord.Server.Data;

namespace DailyActivityRecord.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DailyEntryController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DailyEntryController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AddEntry([FromBody] DailyEntry entry)
        {
            _context.DailyEntries.Add(entry);
            await _context.SaveChangesAsync();
            return Ok(entry);
        }

        [HttpGet("{childId}")]
        public async Task<IActionResult> GetEntries(int childId)
        {
            var entries = await _context.DailyEntries
                .Where(e => e.ChildId == childId)
                .ToListAsync();
            return Ok(entries);
        }
    }
}
