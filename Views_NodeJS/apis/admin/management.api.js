const { axiosJava } = require('../axiosClient');

const BASE_URL = '/admin/management';

const managementApi = {
    getOrderAll: (page) => {
		return axiosJava.get(`${BASE_URL}/order?p=${page}`);
	},

	getOrderDetail: (oid) =>{
		return axiosJava.get(`${BASE_URL}/orderDetail?oid=${oid}`)
	},
};

module.exports = managementApi;
