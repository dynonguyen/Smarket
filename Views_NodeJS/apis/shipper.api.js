const { axiosJava } = require('./axiosClient');

const BASE_URL = '/shipper';

const shipperApi = {
	getOrderHistory: (shipperId = 0, page = 1) => {
		return axiosJava.get(
			`${BASE_URL}/order-history?sId=${shipperId}&p=${page}`,
		);
	},
};

module.exports = shipperApi;
