const constants = require('../constants/index.constant');
const { axiosJava, axiosCSharp } = require('./axiosClient');

const BASE_URL = '/common';

const userApi = {
  getUserByUsername: (username) => {
    return axiosCSharp.get(`/customer/self/info-by-username?username=${username}`);
  },

  getStoreByProductId: (productId) => {
    return axiosCSharp.get(`${BASE_URL}/store/info?productId=${productId}`);
  },

  getCommission: (storeId, customerId) => {
    return axiosCSharp.get(`${BASE_URL}/system/calculate-commisssion?storeId=${storeId}&customerId=${customerId}`);
  },

  getShipperForOrder: (wardId) => {
    return axiosCSharp.get(`${BASE_URL}/system/shipper-nearest/${wardId}`);
  },

  getStoreByStoreId: (storeId) => {
    return axiosCSharp.get(`${BASE_URL}/store/info/basic?storeId=${storeId}`);
  },

  createOrder: (order) => {
    return axiosCSharp.post(`/customer/order/create`, order)
  },

  getShipperRequest: (orderId) => {
    return axiosCSharp.post(`${BASE_URL}/system/shipping-request/${orderId}`);
  },

  getCustomerInfo: (userId) => {
    return axiosCSharp.get(`/customer/self/customer-info?userId=${userId}`)
  },

  getStoreInfo: (userId) => {
    return axiosCSharp.get(`/customer/self/store-info?userId=${userId}`)
  }
}


module.exports = userApi;