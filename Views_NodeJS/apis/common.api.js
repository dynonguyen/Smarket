const { axiosJava } = require('./axiosClient');

const BASE_URL = '/common';

const commonApi = {
	getAllProvince: () => {
		return axiosJava.get(`${BASE_URL}/province-all`);
	},

	getDistrict: (provinceId) => {
		return axiosJava.get(`${BASE_URL}/district/${provinceId}`);
	},

	getWard: (districtId) => {
		return axiosJava.get(`${BASE_URL}/ward/${districtId}`);
	},

	getDistrictById: (districtId) => {
		return axiosJava.get(`${BASE_URL}/district?districtId=${districtId}`);	
	},

	getWardById: (wardId) => {
		return axiosJava.get(`${BASE_URL}/ward?wardId=${wardId}`);	
	},
	
	getProvinceById: (provinceId) => {
		return axiosJava.get(`${BASE_URL}/province?provinceId=${provinceId}`);	
	},
};

module.exports = commonApi;
