using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Utils
{
    public class Utils_Queries
    {
        // List product for search
        public static string ListSearchProduct(string str)
        {
            string query = $"SELECT * FROM Product WHERE LOWER(ProductName) LIKE '%{str.ToLower()}%'";
            return query;
        }

        // Count product of a store
        public static string CountProductOfStore(int storeId)
        {
            string query = $"SELECT s.StoreId, u.Name, count(p.ProductId) as Amount FROM Store s, AppUser u, Product p WHERE p.StoreId = s.StoreId AND s.UserId = u.UserId AND s.StoreId = { storeId.ToString()} GROUP BY s.StoreId, u.Name";
            return query;
        }

        // List product type for search
        public static string GetSearchProductType(string name)
        {
            string query = $"SELECT * FROM ProductType WHERE LOWER(ProductTypeName) LIKE '%{name.ToLower()}%'";
            return query;
        }
    }
}
