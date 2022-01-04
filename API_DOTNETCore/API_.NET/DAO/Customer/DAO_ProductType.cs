using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.NET.Models;
using Microsoft.EntityFrameworkCore;
using API_.NET.Utils;
namespace API_.NET.DAO.Customer
{
    public class DAO_ProductType
    {

        // get all product type
        public static List<ProductType> GetAllProductType()
        {
            using( var context = new SmarketContext())
            {
                return context.ProductType.ToList();
            }
            
        }

        // get searched product
        public static List<ProductType> GetSearchProductType(string typeName)
        {
            using(var context = new SmarketContext())
            {
                return context.ProductType.FromSql(Utils_Queries.GetSearchProductType(typeName)).ToList();
            }
        }
    }
}
