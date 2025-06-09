namespace DailyActivityRecord.Server.Models;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }  // Or Email
    public string Role { get; set; } // Parent, Specialist, Babysitter
    public bool HasSubscription { get; set; }
    public ICollection<ChildUserAccess> ChildAccess { get; set; }
}
