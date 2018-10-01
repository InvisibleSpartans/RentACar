using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RentACarApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RentACarApi.Controllers
{
    [Route("api/[controller]")]
    public class BookingController : Controller
    {
        private readonly RentACarContext _context;
        public BookingController(RentACarContext context)
        {
            _context = context;
            if (_context.BookingItems.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.BookingItems.Add(new Booking {
                    Pickup_city = "Item1",
                    Pickup_address = "Item2",
                });
                _context.SaveChanges();
            }
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<Booking>> GetAll()
        {
            return _context.BookingItems.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}", Name = "GetBooking")]
        public ActionResult<Booking> GetById(long id)
        {
            var item = _context.BookingItems.Find(id);
            if (item == null)

            {
                return NotFound();
            }
            return item;
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Create([FromBody]Booking item)
        {
            _context.BookingItems.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetBooking", new { id = item.Id }, item);
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
