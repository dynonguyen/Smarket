const customerRoute = require('express').Router();
const customerController = require('../controllers/customer.controller');

customerRoute.get(
    '/order/detail/:customerId/:orderId',
    customerController.getOrderDetail
);

module.exports = customerRoute;