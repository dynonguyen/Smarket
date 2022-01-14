const { axiosJava, axiosCSharp } = require('../axiosClient');

const BASE_URL = '/admin/management';

const managementApi = {
  getOrderAll: (page) => {
    return axiosJava.get(`${BASE_URL}/order?p=${page}`);
  },

  getOrderDetail: (oid) => {
    return axiosJava.get(`${BASE_URL}/orderDetail?oid=${oid}`);
  },

  getAcount: (page, type) => {
    return axiosJava.get(`${BASE_URL}/account?userType=${type}&page=${page}`);
  },

  getAccountInfo: (accountId) => {
    return axiosJava.get(`${BASE_URL}/account/info?accountId=${accountId}`);
  },

  getUser: (accountId) => {
    return axiosJava.get(`${BASE_URL}/account/detail?accountId=${accountId}`);
  },

  getStore: () => {
    return axiosCSharp.get(`customer/Store/all`);
  },
};

module.exports = managementApi;
