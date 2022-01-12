using System;
using System.Collections.Generic;
using System.Linq;
using API_.NET.DTO;
using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
namespace API_.NET.DAO
{
    public class DAO_Common
    {
        public static string DeleteRowOfTable(string table, string fieldName, int id)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    context.Empty.FromSql(Utils_Queries.DeleteRowOfTable(table, fieldName, id));
                    context.SaveChanges();
                }
                return Utils_Queries.DeleteRowOfTable(table, fieldName, id);
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }
        }

        public static List<DTO_ProductEachType> GetProductEachType(int group)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.ProductEachType.FromSql(Utils_Queries.GetProductEachType(group)).ToList();
                }
            }
            catch
            {
                return null;
            }
        }

        public static List<DTO_ProductCard> GetProductsByType(int productType, int page, int pageSize)
        {
            if (page < 1)
            {
                page = 1;
            }

            int skipRows = (page - 1) * pageSize;
            try
            {
                using (var context = new SmarketContext())
                {
                    var sqlResult = context.ProductCard.FromSql(Utils_Queries.GetProductCardByType(productType));
                    return sqlResult.Skip(skipRows).Take(pageSize).ToList();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.ToString());
                return new List<DTO_ProductCard>();
            }
        }
    }

}
