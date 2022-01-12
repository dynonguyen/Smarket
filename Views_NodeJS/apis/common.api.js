const { axiosJava, axiosCSharp } = require('./axiosClient');

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

	getProductEachType: (group) => {
		return axiosCSharp.get(`${BASE_URL}/type/amount-type?group=${group}`);	
	}
};

module.exports = commonApi;
