using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.NET.Models;
using Microsoft.EntityFrameworkCore;

namespace API_.NET.DAO
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
                return context.Product.FromSql(DAO_Queries.ListSearchProduct(textsearch)).ToList();
            }
        }
    }
}
