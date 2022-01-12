using API_.NET.DAO;
using API_.NET.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;


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
        public List<DTO_ProductEachType> GetProductEachType([FromQuery] int group) {
            return DAO_Common.GetProductEachType(group);
        }
    }
}