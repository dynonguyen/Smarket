module.exports = {
	USER_TYPES: {
		CUSTOMER: 1,
		SHIPPER: 2,
		STORE: 3,
		ADMIN: 4,
	},

	ROLES: {
		CUSTOMER: 'ROLE_CUSTOMER',
		SHIPPER: 'ROLE_SHIPPER',
		STORE: 'ROLE_STORE',
		ADMIN: 'ROLE_ADMIN',
		GUEST: 'ROLE_GUEST',
	},

	JWT_HEADER: 'Authorization',
	JWT_STORE_KEY: 'jwt',

	PAGE_SIZE: 8,

	ORDER_STATUS: {
		'Đã nhận': 1,
		'Đang mua hàng': 2,
		'Đang giao hàng': 3,
		'Đã giao hàng': 4,
		'Đã thanh toán': 5,
		'Đã hoàn trả': 6,
	},
};
