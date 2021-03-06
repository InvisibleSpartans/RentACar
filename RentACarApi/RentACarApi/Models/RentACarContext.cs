﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace RentACarApi.Models
{
    public class RentACarContext : IdentityDbContext<IdentityUser>
    {
        public RentACarContext(DbContextOptions<RentACarContext> options)
            : base(options)
            {
            }
         public DbSet<Register> RegisterItems { get; set; }
         public DbSet<Booking> BookingItems { get; set; }
         public DbSet<CarDetails> CarItems { get; set; }


    }
}

