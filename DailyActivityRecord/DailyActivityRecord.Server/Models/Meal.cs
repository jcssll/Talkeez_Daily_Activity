namespace DailyActivityRecord.Server
{
    public class Meal
    {
        public string Type { get; set; } // Snack, Lunch
        public DateTime Time { get; set; }
        public string Amount { get; set; } // All, Most, Some
    }
}
