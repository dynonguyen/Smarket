const { axiosJava, axiosCSharp } = require('./axiosClient');

const BASE_URL = '/customer';

const customerApi = {
    getOrderDetail: (customerId, orderId) => {
        return axiosCSharp.get(`${BASE_URL}/order/detail/${customerId}/${orderId}`);
    },

    getOrderDetailProducts: (orderId) => {
        return axiosCSharp.get(
            `${BASE_URL}/order/detail/products-of-order/${orderId}`
        );
    },
};

module.exports = customerApi;