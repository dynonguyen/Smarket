using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API_.NET.DAO.Customer
{
    public class DAO_Store
    {
        // Get all store
        public static List<DTO.DTO_Stores> GetAllStore()
        {
            using (var context = new SmarketContext())
            {
                return context.Stores.FromSql(Utils_Queries.GetListStore()).ToList();
            }
        }
        // Get store by id
        public static DTO.DTO_Stores GetStoreById(int storeId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.Stores.FromSql(Utils_Queries.GetStoreById(storeId)).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        // Get store in area (nearest)
        public static List<DTO.DTO_Stores> GetNearestStore(int area)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.Stores.FromSql(Utils_Queries.GetStoreNearest(area)).ToList();
                }
            }
            catch
            {
                return null;
            }
        }

        // Get stores by search
        public static List<DTO.DTO_Stores> GetSearchStores(string storeName)
        {
            try
            {
                using(var context = new SmarketContext())
                {
                    return context.Stores.FromSql(Utils_Queries.GetSearchStores(storeName)).ToList();
                }
            } catch
            {
                return null;
            }
        }

        // Get stores by product name
        public static List<DTO.DTO_Stores> GetStoresByProductName(string productName)
        {
            try
            {
                using(var context = new SmarketContext())
                {
                    return context.Stores.FromSql(Utils_Queries.GetStoresByProductName(productName)).ToList();
                }
            } catch
            {
                return null;
            }
        }
    }
}
