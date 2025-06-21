using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Moq;
using Microsoft.Extensions.Configuration;
using DailyActivityRecord.Server.Controllers;
using DailyActivityRecord.Server.Data;
using Microsoft.EntityFrameworkCore;
using DailyActivityRecord.Server.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace DailyActivityRecord.Tests
{
    public class AuthControllerTests
    {
        [Fact]
        public async Task Register_ShouldReturnToken_WhenNewUser()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDb").Options;
            var context = new AppDbContext(options);

            var configMock = new Mock<IConfiguration>();
            configMock.Setup(c => c["Jwt:Secret"]).Returns("this_is_a_test_secret_key_for_testing");
            configMock.Setup(c => c["Jwt:Issuer"]).Returns("TestIssuer");
            configMock.Setup(c => c["Jwt:Audience"]).Returns("TestAudience");
            configMock.Setup(c => c["Jwt:ExpiryMinutes"]).Returns("60");

            var controller = new AuthController(context, configMock.Object);

            var dto = new RegisterDto
            {
                Username = "testuser",
                Password = "password",
                Role = "Parent"
            };

            var result = await controller.Register(dto);
            Assert.IsType<OkObjectResult>(result);
        }
    }
}
