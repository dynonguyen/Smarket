using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System;
namespace API_.NET.DAO.Common
{
    public class DAO_ProductType
    {

        // get all product type
        public static List<ProductType> GetAllProductType()
        {
            try {
                using( var context = new SmarketContext())
                    {
                        return context.ProductType.ToList();
                    }
            } catch (Exception ex) {
                Console.Write(ex);
                return null;
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
