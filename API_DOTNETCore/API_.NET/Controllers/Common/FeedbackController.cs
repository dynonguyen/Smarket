using API_.NET.DAO.Common;
using API_.NET.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
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
    }
}
