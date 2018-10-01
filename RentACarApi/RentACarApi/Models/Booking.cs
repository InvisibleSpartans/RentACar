using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentACarApi.Models
{
    public class Booking
    {
        public long Id { get; set; }
        public string Pickup_city { get; set; }
        public string Pickup_address { get; set; }
        public Boolean IsChecked { get; set; }
        public string Drop_city { get; set; }
        public string Drop_address { get; set; }
        public DateTime Pickup_date { get; set; }
        public DateTime Drop_date { get; set; }
    }
}
