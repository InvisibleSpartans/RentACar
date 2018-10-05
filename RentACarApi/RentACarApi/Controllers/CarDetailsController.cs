using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentACarApi.Models;

namespace RentACarApi.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    [ApiController]
    public class CarDetailsController : ControllerBase
    {
        private readonly RentACarContext _context;

        public CarDetailsController(RentACarContext context)
        {
            _context = context;
        }

        // GET: api/CarDetails
        [HttpGet]
        public IEnumerable<CarDetails> GetCarItems()
        {
            return _context.CarItems;
        }

        // GET: api/CarDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCarDetails([FromRoute] short id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var carDetails = await _context.CarItems.FindAsync(id);

            if (carDetails == null)
            {
                return NotFound();
            }

            return Ok(carDetails);
        }

        // PUT: api/CarDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarDetails([FromRoute] short id, [FromBody] CarDetails carDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carDetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(carDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CarDetails
        [HttpPost]
        public async Task<IActionResult> PostCarDetails([FromBody] CarDetails carDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CarItems.Add(carDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarDetails", new { id = carDetails.Id }, carDetails);
        }

        // DELETE: api/CarDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarDetails([FromRoute] short id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var carDetails = await _context.CarItems.FindAsync(id);
            if (carDetails == null)
            {
                return NotFound();
            }

            _context.CarItems.Remove(carDetails);
            await _context.SaveChangesAsync();

            return Ok(carDetails);
        }

        private bool CarDetailsExists(short id)
        {
            return _context.CarItems.Any(e => e.Id == id);
        }
    }
}