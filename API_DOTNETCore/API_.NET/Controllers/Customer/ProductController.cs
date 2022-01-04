using API_.NET.DAO;
using API_.NET.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using API_.NET.Constants;
using API_.NET.DAO.Customer;

namespace API_.NET.Controllers
{
    [Route("api/customer/[controller]")]
    [ApiController]
    [Authorize(Roles = "ROLE_CUSTOMER")]
    public class ProductController : ControllerBase
    {
        [HttpGet("all")]
        public List<Product> GetAllProductForCustomer()
        {
            return DAO_Product.GetAllProduct();
        }

        [HttpGet("search")]
        public List<Product> GetSearchProduct([FromQuery] string name)
        {
            return DAO_Product.GetSearchProduct(name);
        }

        [HttpGet] 
        public Product GetProductById([FromQuery] int productId)
        {
            using(var context = new SmarketContext())
            {
                return context.Product.Where(s => s.ProductId == productId).FirstOrDefault();
            }
        }

        [HttpGet("images")]
        public List<ProductImage> GetProductImagesByProductId([FromQuery] int productId)
        {
            using(var context = new SmarketContext())
            {
                return context.ProductImage.Where(s => s.ProductId == productId).ToList();
            }
        }

        [HttpGet("type/all")]
        public List<ProductType> GetAllProductType()
        {
            return DAO_ProductType.GetAllProductType();
        }

        [HttpGet("type/search")]
        public List<ProductType> GetSearchProductType([FromQuery]  string typeName)
        {
            return DAO_ProductType.GetSearchProductType(typeName);
        }

        [HttpGet("type")]
        public ProductType GetproductTypeById([FromQuery] int typeId)
        {
            using (var context = new SmarketContext())
            {
                return context.ProductType.Where(s => s.ProductTypeId == typeId).FirstOrDefault();
            }              
        }

        
    }
}