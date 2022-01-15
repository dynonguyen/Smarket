﻿using API_.NET.DAO.Common;
using API_.NET.DTO;
using API_.NET.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
namespace API_.NET.Controllers.Customer
{
    [Route("api/common/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        // Get all Store with AccountType = 3 in Account table
        [HttpGet("all")]
        public DTO_Pagination<DTO.DTO_Stores> GetAllStore([FromQuery] int page = 1, [FromQuery] int pageSize = 8)
        {
            return DAO_Store.GetAllStore(page, pageSize);
        }

        // Get store by id
        [HttpGet]
        public DTO.DTO_Stores GetDetailStore([FromQuery] int storeId)
        {
            return DAO_Store.GetStoreById(storeId);
        }

        // Get near stores 
        [HttpGet("near")]
        public List<DTO.DTO_Stores> GetNearestStore([FromQuery] int area)
        {
            return DAO_Store.GetNearestStore(area);
        }

        // Get store by search
        [HttpGet("search")]
        public List<DTO.DTO_Stores> GetSearchStores([FromQuery] string storeName)
        {
            return DAO_Store.GetSearchStores(storeName);
        }

        // Get stores have product
        [HttpGet("product")]
        public List<DTO.DTO_Stores> GetStoresByProductName([FromQuery] string productName)
        {
            return DAO_Store.GetStoresByProductName(productName);
        }

        // Get store information by product id
        [HttpGet("info")]
        public AppUser GetStoreByProductId([FromQuery] int productId)
        {
            return DAO_Store.GetStoreByProductId(productId);
        }
    }
}
