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


    }
}