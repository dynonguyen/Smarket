using API_.NET.DAO;
using API_.NET.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API_.NET.Controllers
{
    [Route("api/[controller]/customer")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet("all")]
        public List<Product> GetAllProductForCustomer()
        {
            return DAO_Product.GetAllProduct();
        }
    }
}