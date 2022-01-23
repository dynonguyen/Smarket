using System;
using System.Linq;
using API_.NET.DTO;
using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;

namespace API_.NET.DAO.Common
{
    public class DAO_System
    {
        public static int GetNearestShipperByWard(int wardId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    int sqlResult = context.Number.FromSql(Utils_Queries.GetNearestShipperByWard(wardId)).First().Number;
                    return sqlResult;
                }
            }
            catch (Exception)
            {
                return -1;
            }
        }
        public static int GetNearestShipperByDistrict(int wardId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    int districtId = context.Number.FromSql(Utils_Queries.GetDistrictByWardId(wardId)).First().Number;
                    int sqlResult = context.Number.FromSql(Utils_Queries.GetNearestShipperByDistrictId(districtId)).First().Number;
                    return sqlResult;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static DTO_Address GetStoreAddressById(int storeId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.Address.FromSql(Utils_Queries.GetStoreAddressById(storeId)).First();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static DTO_Address GetCustomerAddressById(int customerId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.Address.FromSql(Utils_Queries.GetCustomerAddressById(customerId)).First();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetCustomerAddressById ERROR: {ex.ToString()}");
                throw ex;
            }
        }
        public static void UpdateOrderShipper(int orderId, int shipperId)
        {
            try
            {
                using (var context = new SmarketContext())
                {

                    CusOrder order = context.CusOrder.Where(o => o.OrderId == orderId).First();
                    order.ShipperId = shipperId;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static void UpdateShipperStatus(int shipperId, int status)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    Shipper shipper = context.Shipper.Where(s => s.ShipperId == shipperId).First();
                    shipper.Status = status;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetNearestShipperByDistrict {ex.ToString()}");
                throw ex;
            }
        }
    }
}