package api.java.utils;

public class QueryUtil {
    public static String countCusBelongToRegionByLevel(String userTableName, int level, int provinceId) {
        String query = "select count(distinct a.peopleId)"
                + String.format(" from %s c, AppUser a, Ward w, District d, Province p", userTableName)
                + " where c.userId = a.userId and a.ward = w.wardId and w.district = d.districtId and d.province = p.provinceId"
                + String.format(" and w.level = %d and p.provinceId = %d", level, provinceId);
        return query;
    }

    public static String statisticRatioInDistrict(int level, int provinceId) {
        String query = "SELECT d.prefix + ' ' + d.districtName AS ditrictName,"
                + " COUNT(*) AS quantity,"
                + " (SELECT COUNT(*) FROM Ward w2 WHERE w2.district = d.districtId ) AS total"
                + " FROM Ward w, District d"
                + String.format(" WHERE w.district = d.districtId AND w.level = %d AND d.province = %d", level,
                        provinceId)
                + " GROUP BY d.districtName, d.prefix, d.districtId";

        return query;
    }
}