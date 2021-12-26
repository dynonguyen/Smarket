using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API_.NET.Models;
using API_.NET.DAO;
using API_.NET.DTO;
namespace API_.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        //GET api/store
        [HttpGet("count-product/{storeId}")]
        public ProductOfStore GetAmountProductOfStore(int storeId)
        {
            return DAO_Store.GetAmountProduct(storeId);
        }



    }
}
