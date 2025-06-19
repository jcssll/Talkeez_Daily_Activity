using Microsoft.EntityFrameworkCore;
using DailyActivityRecord.Server.Models;

namespace DailyActivityRecord.Server.Data
{

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Child> Children { get; set; }
        public DbSet<ChildUserAccess> ChildUserAccess { get; set; }
        public DbSet<DailyEntry> DailyEntries { get; set; }
    }

}


