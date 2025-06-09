namespace DailyActivityRecord.Server.Models
{
    public class ChildUserAccess
    {
        public int Id { get; set; }
        public int ChildId { get; set; }
        public int UserId { get; set; }
        public DateTime? AccessStart { get; set; }
        public DateTime? AccessEnd { get; set; } // For babysitters
        public bool CanEdit { get; set; }
    }
}
