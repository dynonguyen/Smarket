namespace API_.NET.Utils
{
    public class Utils_Queries
    {
        // --------------- Common ----------------//
        public static string DeleteRowOfTable(string table, string fieldName, int id)
        {
            return $"DELETE FROM {table} WHERE {fieldName} = {id}";
        }

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

        // List product of a store
        public static string GetAllProductOfStore(int storeId)
        {
            string query = $"SELECT * FROM Product WHERE StoreId = {storeId}";
            return query;
        }

        // List Store
        public static string GetListStore()
        {
            string query = "SELECT a.accountId, u.UserId, u.Name, u.Phone, u.Address, s.StoreId, s.StoreType, s.Area, s.Status, s.Categories, s.Certificate"
                             + " FROM AppUser u, Store s, Account a"
                               + " WHERE s.UserId = u.UserId AND a.AccountId = u.AccountId AND a.AccountType = 3";
            return query;
        }

        // Get store by id
        public static string GetStoreById(int storeId)
        {
            string query = "SELECT u.UserId, u.Name, u.Phone, u.Address, s.StoreId, s.StoreType, s.Area, s.Categories, s.Certificate"
                             + " FROM AppUser u, Store s"
                               + $" WHERE s.UserId = u.UserId AND s.Status != 0 AND s.StoreId = {storeId}";
            return query;
        }

        // Get store nearest
        public static string GetStoreNearest(int area)
        {
            string query = "SELECT u.UserId, u.Name, u.Phone, u.Address, s.StoreId, s.StoreType, s.Area, s.Categories, s.Certificate"
                             + " FROM AppUser u, Store s"
                               + $" WHERE s.UserId = u.UserId AND s.Status != 0 AND s.Area = {area}";
            return query;
        }

        // Get store by search
        public static string GetSearchStores(string storeName)
        {
            string query = "SELECT u.UserId, u.Name, u.Phone, u.Address, s.StoreId, s.StoreType, s.Area, s.Categories, s.Certificate"
                             + " FROM AppUser u, Store s"
                               + $" WHERE s.UserId = u.UserId AND s.Status != 0 AND LOWER(u.Name) LIKE '%{storeName.ToLower()}%'";
            return query;
        }

        // Get stores from product id
        public static string GetStoresByProductName(string productName)
        {
            string query = "SELECT u.UserId, u.Name, u.Phone, u.Address, s.StoreId, s.StoreType, s.Area, s.Categories, s.Certificate"
                             + " FROM AppUser u, Store s, Product p"
                               + $" WHERE s.UserId = u.UserId AND s.Status != 0 AND s.StoreId = p.StoreId AND LOWER(p.ProductName) LIKE  '%{productName}%'";
            return query;
        }

        // Get all feedback of a product
        public static string GetFeedbackOfProduct(int productId)
        {
            string query = "SELECT fb.OrderDetailFeedbackId, fb.DetailId, fb.Content, fb.Rating, fb.FeedbackTime"
                            + " FROM OrderDetail o, OrderDetailFeedback fb"
                            + $" WHERE o.OrderDetailId = fb.DetailId AND o.ProductId = {productId}";
            return query;
        }

        // Get amount product each type
        public static string GetProductEachType(int group)
        {
            return "select t.ProductTypeName, p.ProductId, p.ProductName, p.UnitPrice, p.Unit, p.QuantitativeUnit, a.Name"
                    + " from Product p, ProductType t, Store s, AppUser a"
                    + $" where t.GroupType = {group} and t.ProductTypeId = p.ProductTypeId and p.StoreId = s.StoreId and s.UserId = a.UserId"
                    + " Group by t.ProductTypeName,a.Name, p.ProductId, p.ProductName, p.UnitPrice, p.Unit, p.QuantitativeUnit";
        }

        // Get product card list by type
        public static string GetProductCardByGroupType(int groupType)
        {
            return $@"SELECT p.ProductId, p.ProductName, p.UnitPrice, p.QuantitativeUnit, pi.Source AS Thumbnail
                        FROM Product p, ProductImage pi, ProductType pt
                        WHERE p.ProductTypeId = pt.ProductTypeId AND pt.GroupType = {groupType} AND pi.ProductId = p.ProductId AND pi.IsThumbnail = 1";
        }

        // Get list feedback of a product by id
        public static string GetAllProductFeedback(int productId)
        {
            return "SELECT ofb.*"
                    + " FROM OrderDetailFeedback ofb, OrderDetail o"
                    + $" WHERE o.ProductId = {productId} and o.OrderDetailId = ofb.DetailId";
        }

        // Get store information by product id
        public static string GetStoreInfoByProductId(int productId)
        {
            return $@"select a.*
                    from Store s, Product p, AppUser a
                    WHERE p.StoreId = s.StoreId and p.ProductId = {productId} and a.UserId = s.UserId";
        }

        // Get products by type
        public static string GetProductsByType(int typeId) 
        {
            return $@"SELECT p.ProductId, p.ProductName, p.UnitPrice, p.QuantitativeUnit, pi.Source AS Thumbnail
                        FROM Product p, ProductImage pi
                        WHERE p.ProductTypeId = pt.ProductTypeId AND p.ProductTypeId = {typeId} AND pi.ProductId = p.ProductId AND pi.IsThumbnail = 1";
        }
    }
}
