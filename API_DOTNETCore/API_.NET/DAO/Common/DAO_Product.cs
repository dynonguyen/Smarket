using API_.NET.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using API_.NET.Utils;
namespace API_.NET.DAO.Common
{
    public class DAO_Product
    {
        // Get all product
        public static List<Product> GetAllProduct()
        {
            using (var context = new SmarketContext())
            {
                return context.Product.ToList();
            }
        }

        //get products from text search
        public static List<Product> GetSearchProduct(string textsearch)
        {
            using (var context = new SmarketContext())
            {
                return context.Product.FromSql(Utils_Queries.ListSearchProduct(textsearch)).ToList();
            }
        }

        // Get products of a store
        public static List<Product> GetAllProductOfStore(int storeId)
        {
            try
            {
                using(var context  = new SmarketContext())
                {
                    return context.Product.FromSql(Utils_Queries.GetAllProductOfStore(storeId)).ToList();
                }
            } catch
            {
                return null;
            }
        }

        // Get all feedback of a product
        public static List<OrderDetailFeedback> GetAllFeedbackOfProduct(int productId)
        {
            try 
            {
                using(var context = new SmarketContext())
                {
                    return context.OrderDetailFeedback.FromSql(Utils_Queries.GetAllProductFeedback(productId)).ToList();
                }
            }
            catch 
            {
                return null;
            }
        }
    }
}
