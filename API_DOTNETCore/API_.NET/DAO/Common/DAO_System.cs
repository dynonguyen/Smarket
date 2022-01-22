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
                System.Console.WriteLine($"GetStoreAddressById ERROR: {ex.ToString()}");
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
                throw ex;
            }
        }
    }
}