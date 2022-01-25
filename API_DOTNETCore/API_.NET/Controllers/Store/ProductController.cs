using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.NET.DAO.Stores;
using API_.NET.DTO;
using API_.NET.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_.NET.Controllers.Stores
{
    [Route("api/store/[controller]")]
    [ApiController]
    [Authorize(Roles = "ROLE_STORE")]
    public class ProductController : ControllerBase
    {
        [HttpPost("add")]
        public int addProduct([FromBody] Product product)
        {
            return DAO_Product.addProduct(product);
        }

        [HttpPost("image-add")]
        public IActionResult addProduct([FromBody] ProductImage productImage)
        {
            return DAO_Product.addProductImage(productImage) ? Ok("success") : Ok("fail");
        }
    }
}
