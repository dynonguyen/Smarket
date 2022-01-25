const storeRoute = require('express').Router();
const storeController = require('../controllers/store.controller');

storeRoute.get('/', (req, res) => res.redirect('/store/product-list'));
storeRoute.get('/product-list', storeController.getProductByStore);
storeRoute.get(
  '/product-list/:productId',
  storeController.getProductDetailById
);

storeRoute.get('/profile', storeController.getProfile);

storeRoute.get('/order', storeController.getOrders);
storeRoute.get('/order/list', storeController.sendOrders);

storeRoute.get('/feedback', storeController.getFeedback);
storeRoute.post('/feedback', storeController.postFeedback);
module.exports = storeRoute;
