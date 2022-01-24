const { axiosJava, axiosCSharp } = require('./axiosClient');

const BASE_URL = '/store';

const storeApi = {
  getProductByStore: (storeId, page, pageSize) => {
    return axiosCSharp.get(
      `common/product/store?storeId=${storeId}&page=${page}&pageSize=${pageSize}`
    );
  },
};

module.exports = storeApi;
