using API_.NET.DAO;
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

    }
}