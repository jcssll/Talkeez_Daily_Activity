namespace DailyActivityRecord.Server
{
    public class PottyRecord
    {
        public DateTime Time { get; set; }
        public List<string> Status { get; set; } // Wet, Dirty, Dry, Potty

    }
}
