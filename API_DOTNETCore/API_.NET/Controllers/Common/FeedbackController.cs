using API_.NET.DAO.Common;
using API_.NET.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
namespace API_.NET.Controllers.Customer
{
    [Route("api/common/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        [HttpPost("set")]
        public IActionResult SetCustomerFeedback([FromBody] OrderDetailFeedback feedback)
        {
            return DAO_Feedback.CustomerFeedback(feedback) ? Ok("success") : Ok("fail");
        }

        [HttpGet("product")]
        public List<OrderDetailFeedback> GetFeedbacksOfProduct([FromQuery] int productId)
        {
            return DAO_Feedback.GetFeedbacksOfProduct(productId);
        }

        [HttpGet("store")]
        public List<StoreFeedback> GetAllStoreFeedback() 
        {
            using(var context = new SmarketContext())
            {
                return context.StoreFeedback.ToList();
            }
        }

        [HttpPost("store")]
        public bool SetStoreFeedback([FromBody] StoreFeedback feedback)
        {
            try 
            {
                using(var context = new SmarketContext())
                {
                    context.StoreFeedback.Add(feedback);
                    context.SaveChanges();
                    return true;
                }
            }
            catch 
            {
                return false;
            }
        }
    }
}
