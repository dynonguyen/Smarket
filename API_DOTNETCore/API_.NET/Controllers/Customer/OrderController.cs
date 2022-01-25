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

        [HttpGet("detail/{customerId}/{orderId}")]
        public DTO_OrderHistory GetOrderDetail(int customerId, int orderId)
        {

            return DAO_CusOrder.GetOrderDetail(customerId, orderId);
        }

        [HttpGet("detail/products-of-order/{orderId}")]
        public List<DTO_OrderDetailProducts> GetOrderDetailProducts(int orderId)
        {
            return DAO_CusOrder.GetOrderDetailProducts(orderId);
        }

        [HttpPost("create")]
        public CusOrder CreateOrder([FromBody] CusOrder order)
        {
            return DAO_CusOrder.CreateOrder(order);
        }

        [HttpPost("payment-create")]
        public bool CreatePayment([FromBody] Payment payment)
        {
            return DAO_CusOrder.CreatePayment(payment);
        }
    }
}