using DailyActivityRecord.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DailyActivityRecord.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DailyEntryController : ControllerBase
    {
        //POST api/dailyentry
        [HttpPost]
        public IActionResult CreateEntry([FromBody] DailyEntry entry )
        {
            if (entry == null)
                return BadRequest("Entry is null");

            //Save to DB here (use dependency-injected service/repo)
            return Ok(new { message = "Entry recorded successfully" });
        }

        // Get api/dailyentry/week/123
        [HttpGet("week/userId")]
        public IActionResult GetWeeklySummary(string userId)
        {
            //Pull week's worth of data for user from DB
            var result = new List<DailyEntry>(); //replace with real data
            return Ok(result);
        }
    }
}

