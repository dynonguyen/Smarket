using API_.NET.DAO.Customer;
using API_.NET.DAO.Common;
using API_.NET.Models;
using API_.NET.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
namespace API_.NET.Controllers.Store
{
    [Route("api/store/[controller]")]
    [ApiController]
    [Authorize(Roles = "ROLE_STORE")]
    public class SelfController : ControllerBase
    {
        [HttpGet("info-by-username")]
        public AppUser GetUserInfoByUsername([FromQuery] string username)
        {
            return DAO_Customer.GetUserInfo(username);
        }

        [HttpGet("account")]
        public Account GetAccount([FromQuery] string username)
        {
            return DAO_Customer.GetAccount(username);
        }

        [HttpGet("info")]
        public DTO_Stores GetBasicStoreByUserId([FromQuery] int userId) 
        {
            return DAO_Store.GetBasicStoreInfoByUserId(userId);
        }
    }
}