const axios = require('axios').default;
const queryString = require('query-string');

// Axios For Java API
const axiosJava = axios.create({
	baseURL: process.env.JAVA_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosJava.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		throw error;
	},
);

axiosJava.interceptors.response.use(
	(res) => {
		return res;
	},
	(error) => {
		throw error;
	},
);

// Axios For CSharp
const axiosCSharp = axios.create({
	baseURL: process.env.CSHARP_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosCSharp.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		throw error;
	},
);

axiosCSharp.interceptors.response.use(
	(res) => {
		return res;
	},
	(error) => {
		throw error;
	},
);

module.exports = {
	axiosJava,
	axiosCSharp,
};
