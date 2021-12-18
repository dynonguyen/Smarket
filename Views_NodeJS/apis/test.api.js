const { axiosJava } = require('./axiosClient');

const BASE_URL = '/test';

const testApi = {
	getTestData: () => {
		return axiosJava.get(BASE_URL);
	},
};

module.exports = testApi;
