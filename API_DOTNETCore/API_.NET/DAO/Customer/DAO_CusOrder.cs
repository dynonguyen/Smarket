using System;
using System.Collections.Generic;
using System.Linq;
using API_.NET.DTO;
using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;

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

        public static List<DTO_OrderHistory> GetCusOrderHistory(int customerId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.OrderHistory.FromSql(Utils_Queries.GetCustomerOrderHistory(customerId)).ToList();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetCusOrderHistory ERROR: {ex.ToString()}");
                return new List<DTO_OrderHistory>();
            }
        }

        public static List<DTO_OrderDetailProducts> GetOrderDetailProducts(int orderId)
        {
            try
            {

                using (var context = new SmarketContext())
                {
                    return context.OrderDetailProducts.FromSql(Utils_Queries.GetOrderDetailProduct(orderId)).ToList();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetOrderDetailProducts ERROR: {ex.ToString()}");
                return new List<DTO_OrderDetailProducts>();
            }
        }

        public static DTO_OrderHistory GetOrderDetail(int customerId, int orderId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.OrderHistory.FromSql(Utils_Queries.GetOrderDetail(customerId, orderId)).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetCusOrderHistory ERROR: {ex.ToString()}");
                return new DTO_OrderHistory();
            }
        }

        public static CusOrder CreateOrder(CusOrder order)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    context.CusOrder.Add(order);
                    context.SaveChanges();
                    return context.CusOrder.Where(s => s.OrderCode == order.OrderCode).FirstOrDefault();

                }
            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return null;
            }
        }

        public static bool CreatePayment(Payment payment) 
        {
            try 
            {
                using(var context = new SmarketContext())
                {
                    context.Payment.Add(payment);
                    context.SaveChanges();
                    return true;
                }
            } 
            catch 
            {
                return false;
            }
        }
    }
}