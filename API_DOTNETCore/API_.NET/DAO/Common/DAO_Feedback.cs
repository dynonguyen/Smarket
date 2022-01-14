using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace API_.NET.DAO.Common
{
    public class DAO_Feedback
    {
        // Set feedback for product
        public static bool CustomerFeedback(OrderDetailFeedback fb)
        {
            try
            {
                using(var context = new SmarketContext())
                {
                    context.OrderDetailFeedback.Add(fb);
                    context.SaveChanges();
                    return true;
                }
            } catch
            {
                return false;
            }
        }
        
        // Get all feedback of a product
        public static List<OrderDetailFeedback> GetFeedbacksOfProduct(int productId)
        {
            try
            {
                using(var context = new SmarketContext())
                {
                    return context.OrderDetailFeedback.FromSql(Utils_Queries.GetFeedbackOfProduct(productId)).ToList();
                }
            } catch
            {
                return null;
            }
        }
    }
}
