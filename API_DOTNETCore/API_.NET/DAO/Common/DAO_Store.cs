using System;
using System.Collections.Generic;
using System.Linq;
using API_.NET.DTO;
using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;

namespace API_.NET.DAO.Common
{
    public class DAO_Store
    {
        // Get all store
        public static DTO_Pagination<DTO.DTO_Stores> GetAllStore(int page, int pageSize)
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
                    var sqlResult = context.Stores.FromSql(Utils_Queries.GetListStore()).ToList();

                    List<DTO.DTO_Stores> data = sqlResult.Skip(skipRows).Take(pageSize).ToList();
                    return new DTO_Pagination<DTO_Stores>(sqlResult.Count(), page, pageSize, data);
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.ToString());
                return new DTO_Pagination<DTO.DTO_Stores>();
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
            catch
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
                using (var context = new SmarketContext())
                {
                    return context.Stores.FromSql(Utils_Queries.GetSearchStores(storeName)).ToList();
                }
            }
            catch
            {
                return null;
            }
        }

        // Get stores by product name
        public static List<DTO.DTO_Stores> GetStoresByProductName(string productName)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.Stores.FromSql(Utils_Queries.GetStoresByProductName(productName)).ToList();
                }
            }
            catch
            {
                return null;
            }
        }

        // Get store by product id
        public static AppUser GetStoreByProductId(int productId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.AppUser.FromSql(Utils_Queries.GetStoreInfoByProductId(productId)).FirstOrDefault();
                }
            }
            catch
            {
                return null;
            }

        }

        // Get full store information by store id
        public static DTO_StoreInfo GetStoreInfoByStoreId(int storeId)
        {
            try
            {
                DTO_StoreInfo storeInfo = new DTO_StoreInfo();

                using (var context = new SmarketContext())
                {
                    Store store = context.Store.Where(s => s.StoreId == storeId).FirstOrDefault();
                    AppUser storeUser = context.AppUser.Where(u => u.UserId == store.UserId).FirstOrDefault();
                    Account storeAccount = context.Account.Where(acc => acc.AccountId == storeUser.AccountId).FirstOrDefault();
                    DTO_Address address = context.Address.FromSql(Utils_Queries.GetAddressByWardId(storeUser.Ward)).FirstOrDefault();
                    List<DTO_ProductCard> products = context.ProductCard.FromSql(Utils_Queries.GetProductCardByStoreId(storeId)).ToList();
                    var feedbacks = context.StoreFeedback
                                            .Where(f => f.StoreId == storeId)
                                            .Select(p => new
                                            {
                                                p.Content,
                                                p.FeedbackTime
                                            }).ToList();
                    List<DTO_StoreFeedback> storeFeedbacks = new List<DTO_StoreFeedback>();
                    feedbacks.ForEach(f =>
                    {
                        storeFeedbacks.Add(new DTO_StoreFeedback(f.Content, f.FeedbackTime));
                    });


                    storeInfo.StoreName = storeUser.Name;
                    storeInfo.Avatar = storeUser.Avatar;
                    storeInfo.Phone = storeUser.Phone;
                    storeInfo.Address = $"{storeUser.Address}, {address.Ward}, {address.District}, {address.Province}";
                    storeInfo.Categories = store.Categories;
                    storeInfo.Status = store.Status;
                    storeInfo.CreateDate = storeAccount.CreateTime;
                    storeInfo.Products = products;
                    storeInfo.Feedbacks = storeFeedbacks;
                }

                return storeInfo;
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.ToString());
                return null;
            }
        }
    }
}
