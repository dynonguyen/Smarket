const managementRoute = require('express').Router();
const managementController = require('../../controllers/admin/management.controller');

managementRoute.get('/order', managementController.getOrderInfor);
managementRoute.get('/order-detail', managementController.getOrderDetail);

module.exports = managementRoute;
