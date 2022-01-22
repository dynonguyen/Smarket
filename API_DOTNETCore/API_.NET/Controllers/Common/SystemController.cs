using System;
using API_.NET.DAO.Common;
using Microsoft.AspNetCore.Mvc;

namespace API_.NET.Controllers.Common
{
    [Route("api/common/[controller]")]
    [ApiController]

    public class SystemController : ControllerBase
    {
        [HttpGet("shipper-nearest/{wardId}")]
        public IActionResult GetNearestShipper(int wardId)
        {
            try
            {
                if (DAO_System.GetNearestShipperByWard(wardId) != null)
                    return Ok(DAO_System.GetNearestShipperByWard(wardId));
                return Ok(DAO_System.GetNearestShipperByDistrict(wardId));
            }
            catch (Exception ex)
            {
                return BadRequest("Không tìm thấy shipper gần nhất");
            }
        }
    }
}