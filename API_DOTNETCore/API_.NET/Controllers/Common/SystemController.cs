using System;
using API_.NET.DAO.Common;
using API_.NET.DTO;
using Microsoft.AspNetCore.Mvc;

namespace API_.NET.Controllers.Common
{
    [Route("api/common/[controller]")]
    [ApiController]
    public class SystemController : ControllerBase
    {
        /*
            Tiền hoa hồng được tính dựa trên địa lý của khách hàng và cửa hàng
            Cùng phường (ward) => 20.000đ
            Cùng huyện, khác xã (district) => 50.000đ
            toàn quốc => 300.000đ 
            Error => -1
        */
        [HttpGet("calculate-commisssion")]
        public int GetCalculateCommission([FromQuery] int storeId, [FromQuery] int customerId)
        {
            try
            {
                DTO_Address storeAddr = DAO_System.GetStoreAddressById(storeId);
                DTO_Address customerAddr = DAO_System.GetCustomerAddressById(customerId);

                if (storeAddr.Ward == customerAddr.Ward)
                {
                    return (int)(Constants.Constants.COMMISSION_LEVEL_MONEY.WARD);
                }

                if (storeAddr.District == customerAddr.District)
                {
                    return (int)(Constants.Constants.COMMISSION_LEVEL_MONEY.DISTRICT);
                }

                if (storeAddr.Province == customerAddr.Province)
                {
                    return (int)(Constants.Constants.COMMISSION_LEVEL_MONEY.PROVINCE);
                }

                return (int)(Constants.Constants.COMMISSION_LEVEL_MONEY.COUNTRY);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetCalculateCommission ERROR: {ex.ToString()}");
                return -1;
            }
        }

        [HttpPost("shipping-request")]
        public bool PostSendShippingRequest([FromBody] int orderId)
        {
            try
            {
                // Find nearest shipper, watting API ...
                int shipperId = 1;
                DAO_System.UpdateOrderShipper(orderId, shipperId);
                DAO_System.UpdateShipperStatus(shipperId, (int)Constants.Constants.SHIPPER_STATUS.BUSY);
                return true;
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"PostSendShippingRequest ERROR: {ex.ToString()}");
                return false;
            }
        }
    }
}