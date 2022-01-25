using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.NET.DAO.Common;
using API_.NET.DTO;
using API_.NET.Models;
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
    }
}