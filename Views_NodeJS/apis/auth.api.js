const { axiosJava } = require('../apis/axiosClient');

const BASE_URL = '/auth';

const authApi = {
	login: (username, password) => {
		return axiosJava.post(`${BASE_URL}/login`, {
			username,
			password,
		});
	},
};

module.exports = authApi;
