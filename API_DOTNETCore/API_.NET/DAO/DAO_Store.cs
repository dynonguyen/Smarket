using API_.NET.DTO;
using API_.NET.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using API_.NET.Utils;
namespace API_.NET.DAO
{
    public class DAO_Store
    {
        // Get amount product of a store with storeId
        public static ProductOfStore GetAmountProduct(int storeId)
        {
            using (var context = new SmarketContext())
            {
                return context.ProductOfStore.FromSql(Utils_Queries.CountProductOfStore(storeId)).FirstOrDefault();
            }
        }
    }
}
