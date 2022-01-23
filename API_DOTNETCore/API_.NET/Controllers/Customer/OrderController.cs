using System.Collections.Generic;
using API_.NET.DAO.Customer;
using API_.NET.DTO;
using API_.NET.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API_.NET.Controllers.Customer
{
    [Route("api/customer/[controller]")]
    [ApiController]
    [Authorize(Roles = "ROLE_CUSTOMER")]
    public class OrderController : ControllerBase
    {
        [HttpPost("cancel/{orderId}")]
        public IActionResult PostCancelOrder(int orderId)
        {
            int orderStatus = DAO_CusOrder.getOrderStatus(orderId);
            if (orderStatus >= (int)Constants.Constants.ORDER_STATUS.SHIPPING)
            {
                return BadRequest("Không thể huỷ do đơn hàng đã được vận chuyển");
            }

            bool isUpdateSuccess = DAO_CusOrder.updateOrderStatus(orderId, (int)Constants.Constants.ORDER_STATUS.CANCELED);

            if (isUpdateSuccess)
            {
                return Ok("Update Successfully");
            }

            return BadRequest("Huỷ đơn hàng không thành công");
        }

        [HttpGet("history/{customerId}")]
        public List<DTO_OrderHistory> GetOrderHistory(int customerId)
        {
            return DAO_CusOrder.GetCusOrderHistory(customerId);
        }
    }
}