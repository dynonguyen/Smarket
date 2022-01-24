const customerApi = require('../apis/customer.api');
const { PAGE_SIZE } = require('../constants/index.constant');

const {
    formatCurrency,
    convertOrderStatus,
    formatDate,
    convertAccountType,
    convertAreas,
    convertStoreStatus,
} = require('../helpers/index.helper');

exports.getOrderDetail = async(req, res) => {
    try {
        const customerId = req.params.customerId;
        const orderId = req.params.orderId;
        const resOrderDetail =
            (await customerApi.getOrderDetail(customerId, orderId)).data || {};
        const resProducts =
            (await customerApi.getOrderDetailProducts(orderId)).data || [];
        var orderTotal = 0;
        for (var x in resProducts) {
            orderTotal +=
                parseInt(resProducts[x].unitPrice) * parseInt(resProducts[x].quantity);
        }
        res.render('customer/order-detail', {
            resOrderDetail,
            resProducts,
            orderTotal,
            helpers: {
                formatCurrency,
                convertOrderStatus,
                formatDate,
            },
        });
    } catch (error) {
        console.error('Function getOrderDetail Error: ', error);
        return res.render('404');
    }
};