using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using API_.NET.DTO;
namespace API_.NET.DAO.Stores
{
    public class DAO_Order
    {
        public static DTO_OrderHistory GetOrderDetailByStore(int storeId, int orderId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.OrderHistory.FromSql(Utils_Queries.GetOrderDetailStore(storeId, orderId)).FirstOrDefault();
                }
            }
            catch
            {
                System.Console.WriteLine($"ERROR: GetOrderDetailByStore ");
                return new DTO_OrderHistory();
            }
        }
    }
}