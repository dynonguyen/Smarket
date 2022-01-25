using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
namespace API_.NET.DAO.Stores
{
    public class DAO_Product
    {
        public static int addProduct(Product p)
        {
            try
            {
                using(var context = new SmarketContext())
                {
                    context.Product.Add(p);
                    context.SaveChanges();
                    return p.ProductId;
                }
            } catch
            {
                return 0;
            }
        }
        // add new product image
        public static bool addProductImage(ProductImage pimage)
        {
            try
            {
                using(var context = new SmarketContext())
                {
                    context.ProductImage.Add(pimage);
                    context.SaveChanges();
                    return true;
                }
            } catch
            {
                return false;
            }
        }


    }
}