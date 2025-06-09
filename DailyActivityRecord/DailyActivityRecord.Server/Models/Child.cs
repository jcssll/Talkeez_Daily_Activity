namespace DailyActivityRecord.Server.Models
{
    public class Child
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public string Notes { get; set; } // Allergies, special care, etc.
        public int CreatedByUserId { get; set; } // Parent
        public ICollection<ChildUserAccess> ChildAccess { get; set; }
    }
}
