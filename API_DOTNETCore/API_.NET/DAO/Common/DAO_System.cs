using System;
using System.Linq;
using API_.NET.Models;
using API_.NET.Utils;
using Microsoft.EntityFrameworkCore;

namespace API_.NET.DAO.Common
{
    public class DAO_System
    {
        public static int GetNearestShipperByWard(int wardId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    int sqlResult = context.Number.FromSql(Utils_Queries.GetNearestShipperByWard(wardId)).First().Number;
                    return sqlResult;
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetNearestShipperByWard {ex.ToString()}");
                throw ex;
            }
        }

        public static int GetNearestShipperByDistrict(int wardId)
        {
            try
            {
                using (var context = new SmarketContext())
                {
                    int districtId = context.Number.FromSql(Utils_Queries.GetDistrictByWardId(wardId)).First().Number;
                    System.Console.WriteLine("districtId " + districtId);
                    int sqlResult = context.Number.FromSql(Utils_Queries.GetNearestShipperByDistrictId(districtId)).First().Number;
                    System.Console.WriteLine("sqlResult " + sqlResult);
                    return sqlResult;
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"GetNearestShipperByDistrict {ex.ToString()}");
                throw ex;
            }
        }
    }
}