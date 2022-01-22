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

  getDetailProduct: (productId) => {
    return axiosCSharp.get(`${BASE_URL}/product?productId=${productId}`);
  },

  getImagesOfProduct: (productId) => {
    return axiosCSharp.get(`${BASE_URL}/product/images?productId=${productId}`);
  },

  getProductSold: (productId) => {
    return axiosCSharp.get(`${BASE_URL}/product/sold?productId=${productId}`);
  },

  getProductFeedback: (productId) => {
    return axiosCSharp.get(
      `${BASE_URL}/product/feedback?productId=${productId}`
    );
  },

  getProductStore: (productId) => {
    return axiosCSharp.get(`${BASE_URL}/store/info?productId=${productId}`);
  },

  getProductType: (typeId) => {
    return axiosCSharp.get(`${BASE_URL}/product/type?typeId=${typeId}`);
  },

  getTypeByGroup: (groupId) => {
    return axiosCSharp.get(
      `${BASE_URL}/product/type-by-group?groupId=${groupId}`
    );
  },

  getProductByType: (typeId, page, pageSize) => {
    return axiosCSharp.get(
      `${BASE_URL}/product/product-by-type?typeId=${typeId}&page=${page}&pageSize=${pageSize}`
    );
  },

  getProductsBySeach: (keyword, page, pageSize) => {
    return axiosCSharp.get(
      `${BASE_URL}/product/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}`
    );
  },

  getStoreInfo: (storeId) => {
    return axiosCSharp.get(`${BASE_URL}/store/info/${storeId}`);
  },

  getProductForCart: (productId) => {
    return axiosCSharp.get(`${BASE_URL}/product-for-cart?productId=${productId}`);
  }
};

module.exports = commonApi;
