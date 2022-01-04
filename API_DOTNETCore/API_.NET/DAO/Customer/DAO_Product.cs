using API_.NET.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using API_.NET.Utils;
namespace API_.NET.DAO.Customer
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
    }
}
