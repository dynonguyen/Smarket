using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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
