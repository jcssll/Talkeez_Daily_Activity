namespace DailyActivityRecord.Server.Models
{
    public class DailyEntry
    {
        public int Id { get; set; }
        public int ChildId { get; set; }
        public Child Child { get; set; }
        public int SubmittedByUserId { get; set; }
        public User SubmittedBy { get; set; }
        public DateTime Date { get; set; }
        public string Mood { get; set; }
        public List<Behavior> Behaviors { get; set; }
        public List<PottyRecord> PottyRecords { get; set; }
        public List<Meal> Meals { get; set; }
        public List<string> Schedule { get; set; }
        public string Notes { get; set; }
        public List<string> Needs { get; set; }
        public List<CustomField> CustomFields { get; set; }
        public string UserId { get; set; } // For multi-tenancy
    }
}
