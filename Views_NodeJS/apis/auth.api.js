const { axiosJava } = require('../apis/axiosClient');
const { JWT_HEADER } = require('../constants/index.constant');

const BASE_URL = '/auth';

const authApi = {
	login: (username, password) => {
		return axiosJava.post(`${BASE_URL}/login`, {
			username,
			password,
		});
	},

	authorization: (jwt) => {
		return axiosJava.get(`${BASE_URL}/authorization`, {
			headers: {
				[JWT_HEADER]: jwt,
			},
		});
	},
};

module.exports = authApi;
