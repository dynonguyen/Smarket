const shipperRoute = require('express').Router();
const shipperController = require('../controllers/shipper.controller');

shipperRoute.get('/', (req, res) => res.redirect('/shipper/request'));

shipperRoute.get('/order-history', shipperController.getOrderHistory);

shipperRoute.get('/order-info/:orderId', shipperController.getOrderInfo);

shipperRoute.get('/profile', shipperController.getProfile);

shipperRoute.get('/request', shipperController.getDeliveryRequest);
module.exports = shipperRoute;
