package api.java.utils;

public class QueryUtil {
	// ----------- Admin Statistic ----------- //
	public static String countCusBelongToRegionByLevel(String userTableName, int level, int provinceId) {
		return "select count(distinct a.peopleId)"
				+ String.format(" from %s c, AppUser a, Ward w, District d, Province p", userTableName)
				+ " where c.userId = a.userId and a.ward = w.wardId and w.district = d.districtId and d.province = p.provinceId"
				+ String.format(" and w.level = %d and p.provinceId = %d", level, provinceId);
	}

	public static String statisticRatioInDistrict(int level, int provinceId) {
		return "SELECT d.prefix + ' ' + d.districtName AS ditrictName,"
				+ " COUNT(*) AS quantity,"
				+ " (SELECT COUNT(*) FROM Ward w2 WHERE w2.district = d.districtId ) AS total"
				+ " FROM Ward w, District d"
				+ String.format(" WHERE w.district = d.districtId AND w.level = %d AND d.province = %d",
						level,
						provinceId)
				+ " GROUP BY d.districtName, d.prefix, d.districtId";

	}

	// ----------- Shipper ----------- //
	public static String getOrderHistoryWithShipper(int shipperId) {
		return "SELECT o.orderId, o.orderCode, o.orderTotal, o.orderStatus, u.name as cusName, o.createDate, o.deliveryAddress"
				+ " FROM CusOrder o, Customer c, AppUser u"
				+ String.format(" WHERE o.shipperId = %d AND c.customerId = o.customerId AND c.userId = u.userId",
						shipperId);
	}
}