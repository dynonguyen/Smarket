const managementRoute = require('express').Router();
const managementController = require('../../controllers/admin/management.controller');

managementRoute.get('/order', managementController.getOrderInfor);
managementRoute.get('/order-detail', managementController.getOrderDetail);

managementRoute.get('/account', managementController.getAccount);
managementRoute.get('/account/detail', managementController.getUserInfo);

managementRoute.get('/store', managementController.getStore);

module.exports = managementRoute;
