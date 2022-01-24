using System;
using System.Linq;
using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;

namespace API_.NET.DAO.Customer
{
    public class DAO_Customer
    {
        public static int GetWardIdByCustomerId(int customerId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.Number.FromSql(Utils_Queries.GetWardIdOfCustomer(customerId)).First().Number;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static AppUser GetUserInfo(string username) 
        {
            try 
            {
                using(var context = new SmarketContext())
                {
                    return context.AppUser.FromSql(Utils_Queries.GetUserInfoByUsername(username)).FirstOrDefault();
                }
            }
            catch 
            {
                return null;
            }
        }
    }
}