using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RentACarApi.Models
{
    public class RentACarContext : DbContext
    {
        public RentACarContext(DbContextOptions<RentACarContext> options)
            : base(options)
            {
            }
            public DbSet<Register> RegisterItems { get; set; }
            public DbSet<Booking> BookingItems { get; set; }
    }
}

