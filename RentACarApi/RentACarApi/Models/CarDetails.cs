using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentACarApi.Models
{
    public class CarDetails
    {
        public Int16 CarId { get; set; }
        public string CarName { get; set; }
        public Int16 CarRate { get; set; }
        public Int16 CarSeats { get; set; }
    }
}
