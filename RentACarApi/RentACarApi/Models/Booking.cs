﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RentACarApi.Models
{
    public class Booking
    {
        public long Id { get; set; }
        public string Pickup_city { get; set; }
        public string Pickup_address { get; set; }
        public double PickUpLng { get; set; }
        public double PickUpLat { get; set; }
        public string Drop_city { get; set; }
        public string Drop_address { get; set; }
        public double DropLng { get; set; }
        public double DropLat { get; set; }
        public DateTime Pickup_date { get; set; }
        public DateTime Drop_date { get; set; }
        public Int16 TotalPrice { get; set; }
        public Int16 CarId { get; set; }
        public CarDetails Car { get; set; }

    }
}
