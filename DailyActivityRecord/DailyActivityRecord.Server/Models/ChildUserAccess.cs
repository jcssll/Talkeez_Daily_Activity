namespace DailyActivityRecord.Server.Models
{
    public class ChildUserAccess
    {
        public int Id { get; set; }
        public int ChildId { get; set; }
        public Child Child { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public DateTime? AccessStart { get; set; }
        public DateTime? AccessEnd { get; set; }
        public bool CanEdit { get; set; }
    }
}
