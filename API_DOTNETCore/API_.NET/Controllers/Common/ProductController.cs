using API_.NET.DAO.Common;
using API_.NET.DTO;
using API_.NET.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace API_.NET.Controllers.Common
{
    [Route("api/common/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        // Get all product of system
        [HttpGet("all")]
        public List<Product> GetAllProductForCustomer()
        {
            return DAO_Product.GetAllProduct();
        }

        // Get Quantity product sold
        [HttpGet("sold")]
        public List<OrderDetail> GetQuantityProductSold([FromQuery] int productId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.OrderDetail.Where(s => s.ProductId == productId).ToList();
                }
            }
            catch
            {
                return null;
            }
        }

        // Get feedbacks of product
        [HttpGet("feedback")]
        public List<OrderDetailFeedback> GetProductFeedback([FromQuery] int productId)
        {
            return DAO_Product.GetAllFeedbackOfProduct(productId);
        }

        // Get product by search
        [HttpGet("search")]
        public List<DTO_ProductCard> GetSearchProduct([FromQuery] string keyword, [FromQuery] int page, [FromQuery] int pageSize)
        {
            return DAO_Product.GetProductsBySeach(keyword, page, pageSize);
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
                return context.ProductImage.Where(s => s.ProductId == productId).Where(s => s.IsThumbnail == false).ToList();
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
        public List<ProductType> GetSearchProductType([FromQuery] string typeName)
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
        public DTO_Pagination<DTO.DTO_Products> GetAllProductOfStore([FromQuery] int storeId, [FromQuery] int page = 1, [FromQuery] int pageSize = 8)
        {
            return DAO_Product.GetAllProductOfStore(storeId, page, pageSize);
        }

        [HttpGet("type-by-group")]
        public List<ProductType> getTypeByGroup([FromQuery] int groupId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.ProductType.Where(s => s.GroupType == groupId).ToList();
                }
            }
            catch
            {
                return null;
            }
        }

        [HttpGet("product-by-type")]
        public List<DTO.DTO_ProductCard> geProductByType([FromQuery] int typeId, [FromQuery] int page, [FromQuery] int pageSize)
        {
            return DAO.DAO_Common.GetProductsByType(typeId, page, pageSize);
        }

    }
}