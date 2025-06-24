using Microsoft.EntityFrameworkCore;
using DailyActivityRecord.Server.Models;

namespace DailyActivityRecord.Server.Data
{

    public class AppDbContext : DbContext
    {
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    // Mark embedded value objects as keyless
        //    modelBuilder.Entity<Behavior>().HasNoKey();
        //    modelBuilder.Entity<Meal>().HasNoKey();
        //    modelBuilder.Entity<PottyRecord>().HasNoKey();
        //    modelBuilder.Entity<CustomFields>().HasNoKey();
        //}
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Child> Children { get; set; }
        public DbSet<ChildUserAccess> ChildUserAccess { get; set; }
        public DbSet<DailyEntry> DailyEntries { get; set; }
    }

}


