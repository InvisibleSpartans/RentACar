using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RentACarApi.Controllers
{
    [Route("api/[controller]")]
    public class CarController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;

//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

//namespace car.Controllers
//{
//    [Route("api/[controller]")]
//    public class BookingController : Controller
//    {
//        private readonly RentACarContext _context;

//        public BookingController(RentACarContext context)
//        {
//            _context = context;
//            if (_context.BookingItems.Count() == 0)
//            {
//                // Create a new TodoItem if collection is empty,
//                // which means you can't delete all TodoItems.
//                // _context.CarItems.Add(new CarDetails {CarName = "Tiago", CarRate = 10 });
//                _context.BookingItems.Add(new CarDetails
//                {
//                    CarName = "Item1",
//                    CarRate = "Item2",
//                    CarSeats = "Item3"
//                });
//                _context.SaveChanges();
//            }
//        }

//        // GET: api/<controller>
//        [HttpGet]
//        public ActionResult<List<CarDetails>> GetAll()
//        {
//            return _context.BookingItems.ToList();
//        }
//        //        // GET api/<controller>/5
//        //        [HttpGet("{id}")]
//        //        public string Get(int id)
//        //        {
//        //            return "value";
//        //        }

//        //        // POST api/<controller>
//        //        [HttpPost]
//        //        public void Post([FromBody]string value)
//        //        {
//        //        }

//        //        // PUT api/<controller>/5
//        //        [HttpPut("{id}")]
//        //        public void Put(int id, [FromBody]string value)
//        //        {
//        //        }

//        //        // DELETE api/<controller>/5
//        //        [HttpDelete("{id}")]
//        //        public void Delete(int id)
//        //        {
//        //        }
//    }
//}
