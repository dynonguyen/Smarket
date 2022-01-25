const { axiosJava } = require('./axiosClient');

const BASE_URL = '/shipper';

const shipperApi = {
  getOrderHistory: (shipperId = 0, page = 1) => {
    return axiosJava.get(
      `${BASE_URL}/order-history?sId=${shipperId}&p=${page}`
    );
  },

  getOrderInfo: (orderId) => {
    return axiosJava.get(`${BASE_URL}/order-info/${orderId}`);
  },

  updateOrderStatus: (status, orderId) => {
    return axiosJava.get(
      `${BASE_URL}/order/change-status?status=${status}&orderId=${orderId}`
    );
  },

  getAccount: (username) => {
    return axiosJava.get(`${BASE_URL}/account?username=${username}`);
  },

  getUser: (accountId) => {
    return axiosJava.get(`${BASE_URL}/user?accountId=${accountId}`);
  },

  getShipper: (userId) => {
    return axiosJava.get(`${BASE_URL}/shipper?userId=${userId}`);
  },

  getShippingRequest: (shipperId) => {
    return axiosJava.get(`${BASE_URL}/request/${shipperId}`);
  },
};

module.exports = shipperApi;
