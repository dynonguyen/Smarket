using API_.NET.DAO.Customer;
using API_.NET.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
namespace API_.NET.Controllers.Customer
{
    [Route("api/customer/[controller]")]
    [ApiController]
    [Authorize(Roles = "ROLE_CUSTOMER")]
    public class SelfController : ControllerBase
    {
        [HttpGet("info-by-username")]
        public AppUser GetUserInfoByUsername([FromQuery] string username)
        {
            return DAO_Customer.GetUserInfo(username);
        }

        [HttpGet("customer-info")]
        public Models.Customer GetCustomerInfo([FromQuery] int userId) 
        {
            using(var context = new SmarketContext())
            {
                return context.Customer.Where(s => s.UserId == userId).FirstOrDefault();
            }
        }

        [HttpGet("store-info")]
        public Models.Store GetStoreInfo([FromQuery] int userId) 
        {
            using(var context = new SmarketContext())
            {
                return context.Store.Where(s => s.UserId == userId).FirstOrDefault();
            }
        }
    }
}