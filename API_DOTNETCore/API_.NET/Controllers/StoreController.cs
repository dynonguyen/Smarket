using API_.NET.DAO;
using API_.NET.DTO;
using Microsoft.AspNetCore.Mvc;
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
