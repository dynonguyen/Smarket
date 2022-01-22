using System;
using System.Collections.Generic;
using API_.NET.DAO;
using API_.NET.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API_.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        [HttpGet("delete/row/{table}/{fieldName}/{id}")]
        public string DeleteRowOfTable(string table, string fieldName, int id)
        {
            return DAO_Common.DeleteRowOfTable(table, fieldName, id);
        }

        [HttpGet("type/amount-type")]
        [Authorize(Roles = "ROLE_ADMIN")]
        public List<DTO_ProductEachType> GetProductEachType([FromQuery] int group)
        {
            return DAO_Common.GetProductEachType(group);
        }

        [HttpGet("products-by-grouptype/{groupType}")]
        public List<DTO_ProductCard> GetProductsByGroupType(int groupType, [FromQuery] int page = 1, [FromQuery] int pageSize = 8)
        {
            return DAO_Common.GetProductsByGroupType(groupType, page, pageSize);
        }

        [HttpGet("product-for-cart")]
        public DTO_ProductCard GetProductForCart([FromQuery] int productId)
        {
            return DAO_Common.GetProductForCart(productId);
        }
    }
}