using API_.NET.DAO.Customer;
using API_.NET.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace API_.NET.Controllers
{
    [Route("api/customer/[controller]")]
    [ApiController]
    [Authorize(Roles = "ROLE_CUSTOMER")]
    public class ProductController : ControllerBase
    {
        // Get all product of system
        [HttpGet("all")]
        public List<Product> GetAllProductForCustomer()
        {
            return DAO_Product.GetAllProduct();
        }

        // Get product by search
        [HttpGet("search")]
        public List<Product> GetSearchProduct([FromQuery] string name)
        {
            return DAO_Product.GetSearchProduct(name);
        }

        // Get product by id
        [HttpGet]
        public Product GetProductById([FromQuery] int productId)
        {
            using (var context = new SmarketContext())
            {
                return context.Product.Where(s => s.ProductId == productId).FirstOrDefault();
            }
        }

        // Get thumbnail image of product
        [HttpGet("thumbnail")]
        public ProductImage GetThumbnailImageOfProduct([FromQuery] int productId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.ProductImage.Where(s => s.ProductId == productId).Where(s => s.IsThumbnail == true).FirstOrDefault();
                }
            }
            catch
            {
                return null;
            }
        }

        // Get all images of product by product id
        [HttpGet("images")]
        public List<ProductImage> GetProductImagesByProductId([FromQuery] int productId)
        {
            using (var context = new SmarketContext())
            {
                return context.ProductImage.Where(s => s.ProductId == productId).ToList();
            }
        }

        // Get all product type
        [HttpGet("type/all")]
        public List<ProductType> GetAllProductType()
        {
            return DAO_ProductType.GetAllProductType();
        }

        // Get product types by search
        [HttpGet("type/search")]
        public List<ProductType> GetSearchProductType([FromQuery]  string typeName)
        {
            return DAO_ProductType.GetSearchProductType(typeName);
        }

        // Get product type by id
        [HttpGet("type")]
        public ProductType GetproductTypeById([FromQuery] int typeId)
        {
            using (var context = new SmarketContext())
            {
                return context.ProductType.Where(s => s.ProductTypeId == typeId).FirstOrDefault();
            }
        }

        // Get all product of store by store id
        [HttpGet("store")]
        public List<Product> GetAllProductOfStore([FromQuery] int storeId)
        {
            return DAO_Product.GetAllProductOfStore(storeId);
        }


    }
}