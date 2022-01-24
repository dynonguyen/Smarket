const { axiosJava, axiosCSharp } = require('./axiosClient');

const BASE_URL = '/store';

const storeApi = {
  getProductByStore: (storeId, page, pageSize) => {
    return axiosCSharp.get(
      `common/product/store?storeId=${storeId}&page=${page}&pageSize=${pageSize}`
    );
  },

  getProductDetailById: (productId) => {
    return axiosCSharp.get(`common/product?productId=${productId}`);
  },

  getProductImageById: (productId) => {
    return axiosCSharp.get(`common/Product/thumbnail?productId=${productId}`);
  },
};

module.exports = storeApi;
