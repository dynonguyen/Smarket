using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.NET.DAO.Common;
using API_.NET.DAO;
using API_.NET.DTO;
using API_.NET.Models;
using API_.NET.DAO.Stores;
using API_.NET.DAO.Customer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_.NET.Controllers.Store
{
    [Route("api/store/[controller]")]
    [ApiController]
    [Authorize(Roles = "ROLE_STORE")]
    public class OrderController : ControllerBase
    {
      [HttpGet("history/{storeId}")]
      public List<CusOrder> GetOrders(int storeId)
      {
        using(var context = new SmarketContext())
        {
          return context.CusOrder.Where(s => s.StoreId == storeId).ToList();
        }
      }

      [HttpGet("detail/{storeId}/{orderId}")]
      public DTO_OrderHistory GetOrderDetail(int storeId, int orderId)
      {
          return DAO_Order.GetOrderDetailByStore(storeId, orderId);
      }

      [HttpGet("detail/products-of-order/{orderId}")]
      public List<DTO_OrderDetailProducts> GetOrderDetailProducts(int orderId)
      {
          return DAO_CusOrder.GetOrderDetailProducts(orderId);
      }

      [HttpGet("shipping-money/{orderId}")]
      public int getShippingMoney(int orderId)
      {
          Payment paymentInfo = DAO_CusOrder.GetShippingMoney(orderId);
          return paymentInfo.ShippingMoney;
      }
      
    }
}