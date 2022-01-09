using API_.NET.DTO;
using API_.NET.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace API_.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // POST: api/Account
        [HttpPost("signup")]
        public DTO_Response CreateAccount([FromBody] Account account)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    account.Password = BCrypt.Net.BCrypt.HashPassword(account.Password, Constants.Constants.PW_SALT);
                    context.Account.Add(account);
                    context.SaveChanges();
                    var acc = context.Account.Where(s => s.Username == account.Username).FirstOrDefault();

                    return new DTO_Response("Success", acc.AccountId);
                }
            } catch(Exception ex)
            {
                return new DTO_Response("Fail", 0);
            }          
        }

        // Create User after account created
        [HttpPost("user/create")]
        public DTO_Response CreateUser([FromBody] AppUser user)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    context.AppUser.Add(user);
                    context.SaveChanges();
                    var u = context.AppUser.Where(s => s.AccountId == user.AccountId).FirstOrDefault();
                    return new DTO_Response("Success", user.UserId);
                }
            }
            catch (Exception ex)
            {
                return new DTO_Response("Fail", 0);
            }
        }
        
        // Create Customer, Shipper,  Store
        [HttpPost("user/customer")]
        public IActionResult CreateCustomer([FromBody] Models.Customer customer)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    context.Customer.Add(customer);
                    context.SaveChanges();
                    return Ok("Success");
                }
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
        [HttpPost("user/shipper")]
        public IActionResult CreateShipper([FromBody] Models.Shipper shipper)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    context.Shipper.Add(shipper);
                    context.SaveChanges();
                    return Ok("Success");
                }
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
        [HttpPost("user/store")]
        public IActionResult CreateStore([FromBody] Models.Store store)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    context.Store.Add(store);
                    context.SaveChanges();
                    return Ok("Success");
                }
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }
    }
}
