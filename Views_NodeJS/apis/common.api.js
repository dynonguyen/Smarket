const { axiosJava } = require('./axiosClient');

const BASE_URL = '/common';

const commonApi = {
	getAllProvince: () => {
		return axiosJava.get(`${BASE_URL}/province-all`);
	},
};

module.exports = commonApi;
