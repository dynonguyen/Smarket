const constants = require('../constants/index.constant');
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

    getAllPayment: () => {
        return axiosJava.get(`${BASE_URL}/year-payment`);
    },
      
    getProductEachType: (group) => {
        return axiosCSharp.get(`${BASE_URL}/type/amount-type?group=${group}`);
    },

    getProductsByGroupType: (
      grouptype = 1,
      page = 1,
      pageSize = constants.PAGE_SIZE
    ) => {
        return axiosCSharp.get(
        `${BASE_URL}/products-by-grouptype/${grouptype}?page=${page}&pageSize=${pageSize}`
      );
    },
};

module.exports = commonApi;
