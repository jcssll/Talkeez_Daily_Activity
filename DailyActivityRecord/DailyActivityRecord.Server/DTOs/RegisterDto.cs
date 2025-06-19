namespace DailyActivityRecord.Server.DTOs
{
    public class RegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; } //Parent, BabySitter, etc.
    }
}
