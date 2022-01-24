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

        public static List<DTO_ProductCard> GetProductsByGroupType(int groupType, int page, int pageSize)
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
                    var sqlResult = context.ProductCard.FromSql(Utils_Queries.GetProductCardByGroupType(groupType));
                    return sqlResult.Skip(skipRows).Take(pageSize).ToList();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.ToString());
                return new List<DTO_ProductCard>();
            }
        }

        public static List<DTO_ProductCard> GetProductsByType(int typeId, int page, int pageSize)
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
                    var sqlResult = context.ProductCard.FromSql(Utils_Queries.GetProductsByType(typeId));
                    return sqlResult.Skip(skipRows).Take(pageSize).ToList();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.ToString());
                return new List<DTO_ProductCard>();
            }
        }

        public static DTO_ProductCard GetProductForCart(int productId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    return context.ProductCard.FromSql(Utils_Queries.GetProductForCart(productId)).FirstOrDefault();
                }
            }
            catch
            {
                return null;
            }
        }

        public static List<DTO_ProductCard> GetProductsByNearestStore(int storeId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    var sqlResult = context.ProductCard.FromSql(Utils_Queries.GetProductsByStoreId(storeId));
                    return sqlResult.ToList();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.ToString());
                return new List<DTO_ProductCard>();
            }

        }
        public static List<Store> GetNearestStore(int provinceId, int districtId, int wardId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    var sqlResult = context.Store.FromSql(Utils_Queries.GetStoreIdByWardId(wardId));
                    System.Console.WriteLine(sqlResult.ToList());
                    if (sqlResult.ToList().Any())
                    {
                        return sqlResult.ToList();
                    }
                    else
                    {
                        sqlResult = context.Store.FromSql(Utils_Queries.GetStoreIdByDistrictId(districtId));
                        if (sqlResult.ToList().Any())
                        {
                            return sqlResult.ToList();
                        }
                        else
                        {
                            sqlResult = context.Store.FromSql(Utils_Queries.GetStoreIdByProvinceId(provinceId));
                            if (!sqlResult.ToList().Any())
                            {
                                System.Console.WriteLine("Error ");
                                return new List<Store>();
                            }
                            return sqlResult.ToList();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.ToString());
                return new List<Store>();
            }
        }

    }
}

