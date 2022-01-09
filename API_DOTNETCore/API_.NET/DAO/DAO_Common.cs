using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

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
            }catch (Exception ex)
            {
                return ex.ToString();
            }
        }
    }
    
}
