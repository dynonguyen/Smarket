package api.java.utils;

public class QueryUtil {

	// ----------- Admin Order ---------------//
	public static String getOrderInfor(String tableName) {
		return "select orderId,shipperId,customerId,storeId"
				+ String.format(" from %s", tableName);
	}

	// ----------- Admin Statistic ----------- //
	public static String countCusBelongToRegionByLevel(String userTableName, int level, int provinceId) {
		return "select count(distinct a.peopleId)"
				+ String.format(" from %s c, AppUser a, Ward w, District d, Province p", userTableName)
				+ " where c.userId = a.userId and a.ward = w.wardId and w.district = d.districtId and d.province = p.provinceId"
				+ String.format(" and w.level = %d and p.provinceId = %d", level, provinceId);
	}

	public static String statisticRatioInDistrict(int level, int provinceId) {
		return "SELECT d.prefix + ' ' + d.districtName AS districtName,"
				+ " COUNT(*) AS quantity,"
				+ " (SELECT COUNT(*) FROM Ward w2 WHERE w2.district = d.districtId ) AS total"
				+ " FROM Ward w, District d"
				+ String.format(" WHERE w.district = d.districtId AND w.level = %d AND d.province = %d",
						level,
						provinceId)
				+ " GROUP BY d.districtName, d.prefix, d.districtId";

	}

	public static String getRevenueAndIncomeQuery(int year) {
		return "SELECT o.orderId, o.orderCode, o.orderTotal, p.shippingMoney, p.totalMoney,p.paymentTime"
				+ " FROM CusOrder o,Payment p"
				+ String.format(" WHERE o.orderId = p.orderId and orderStatus = 6 and YEAR(p.paymentTime) = %d", year);
	}

	// ---------- Admin account, user -----------------//

	public static String getCustomerInfo(int accountId) {
		return "SELECT a.userId, a.accountId, a.avatar, a.name, a.peopleId, a.address, a.phone, c.customerLevel"
				+ " FROM AppUser a, Customer c"
				+ String.format(" WHERE a.userId = c.userId AND a.accountId = %d", accountId);
	}

	public static String getStoreInfo(int accountId) {
		return "SELECT a.userId, a.accountId, a.avatar, a.name, a.peopleId, a.address, a.phone, s.storeType, s.status, s.area, s.categories, s.certificate, s.storeId"
				+ " FROM AppUser a, Store s"
				+ String.format(" WHERE a.userId = s.userId AND a.accountId = %d", accountId);
	}

	public static String getShipperInfo(int accountId) {
		return "SELECT a.userId, a.accountId, a.avatar, a.name, a.peopleId, a.address, a.phone, s.status, s.area, s.shipperLicense, s.shipperRating, s.shipperId"
				+ " FROM AppUser a, Shipper s"
				+ String.format(" WHERE a.userId = s.userId AND a.accountId = %d", accountId);
	}

	public static String getAmountProductOfEachGroupType() {
		return "SELECT t.groupType, count(p.productId) AS AmountProduct"
				+ " FROM Product p, ProductType t"
				+ " WHERE p.productTypeId = t.productTypeId"
				+ " GROUP BY t.groupType"
				+ " ORDER BY t.groupType";
	}

	public static String getAmountProductInType(int group) {
		return "select t.productTypeId as TypeId, t.groupType as GroupId, t.productTypeName as TypeName, count(p.productId) as Amount"
				+ " from Product p, ProductType t"
				+ String.format(" where t.groupType = %d and t.productTypeId = p.productTypeId", group)
				+ " Group by t.productTypeId,t.groupType, t.productTypeName";
	}

	// ----------- Shipper ----------- //
	public static String getOrderHistoryWithShipper(int shipperId) {
		return "SELECT o.orderId, o.orderCode, o.orderTotal, o.orderStatus, u.name as cusName, o.createDate, o.deliveryAddress"
				+ " FROM CusOrder o, Customer c, AppUser u"
				+ String.format(" WHERE o.shipperId = %d AND c.customerId = o.customerId AND c.userId = u.userId",
						shipperId)
				+ " ORDER BY o.createDate";
	}

	public static String getOrderInfoWithOrderId(int orderId) {
		return "SELECT p.productName, p.quantitativeUnit, p.unitPrice AS unitPrice, p.source AS productSource,"
				+ "o.unitPrice AS orderDetailUnitPrice, o.quantity, o.orderDetailDes,"
				+ "pt.productTypeName, u.name AS storeName, u.address AS storeAddress,"
				+ "s.status AS storeStatus, pimg.source AS imageSource"
				+ " FROM OrderDetail o, Product p, ProductType pt, Store s, AppUser u, ProductImage pimg"
				+ String.format(" WHERE o.orderId = %d AND o.productId = p.productId", orderId)
				+ " AND p.storeId = s.storeId AND s.userId = u.userId"
				+ " AND p.productTypeId = pt.productTypeId"
				+ " AND p.productId = pimg.productId AND pimg.isThumbnail = CONVERT(BIT, 1)";
	}
}