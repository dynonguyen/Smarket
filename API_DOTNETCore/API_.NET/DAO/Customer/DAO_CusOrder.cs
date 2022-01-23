using System;
using System.Linq;
using API_.NET.Models;

namespace API_.NET.DAO.Customer
{
    public class DAO_CusOrder
    {
        public static int getOrderStatus(int orderId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    int orderStatus = context.CusOrder.Where(order => order.OrderId == orderId).FirstOrDefault().OrderStatus;
                    return orderStatus;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"getOrderStatus Error: {ex.ToString()}");
                return -1;
            }
        }

        public static bool updateOrderStatus(int orderId, int orderStatus)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    CusOrder order = context.CusOrder.Where(o => o.OrderId == orderId).First();
                    order.OrderStatus = orderStatus;
                    context.SaveChanges();
                    return true;
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"updateOrderStatus ERROR: {ex}");
                return false;
            }
        }

        public static CusOrder GetCusOrderById(int orderId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.CusOrder.Where(o => o.OrderId == orderId).First();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}