using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RentACarApi.Models;

namespace RentACarApi.Controllers
{
    public class RegisterBinder
    {
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly RentACarContext dbContext;
        public RegistrationController(UserManager<IdentityUser> userManager, RentACarContext appDbContext)
        {
            this.userManager = userManager;
            this.dbContext = appDbContext;
        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterBinder register)
        {
            var user = new IdentityUser { UserName = register.UserName, Email = register.Email };
            var result = await userManager.CreateAsync(user, register.Password);
            if(result.Succeeded)
            {
                var registerUser = new Register { IdentityId = user.Id,FirstName=register.FirstName,LastName= register.LastName,EmailId= register.Email };
                await dbContext.RegisterItems.AddAsync(registerUser);
                dbContext.SaveChanges();
                return Ok("Account created");
            }
            return new BadRequestObjectResult("User Not Created");
        }
    }
}