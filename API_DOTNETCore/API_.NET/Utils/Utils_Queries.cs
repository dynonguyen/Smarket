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

        // List product of a store
        public static string GetAllProductOfStore(int storeId)
        {
            string query = $"SELECT * FROM Product WHERE StoreId = {storeId}";
            return query;
        }

        // List Store
        public static string GetListStore()
        {
            string query = "SELECT u.UserId, u.Name, u.Phone, u.Address, s.StoreId, s.StoreType, s.Area, s.Categories, s.Certificate"
                             + " FROM AppUser u, Store s"
                               + " WHERE s.UserId = u.UserId AND s.Status != 0";
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
    }
}
