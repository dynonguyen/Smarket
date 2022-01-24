const storeRoute = require('express').Router();
const storeController = require('../controllers/store.controller');

storeRoute.get('/', (req, res) => res.redirect('/store/product-list'));
storeRoute.get('/product-list', storeController.getProductByStore);
storeRoute.get(
  '/product-list/:productId',
  storeController.getProductDetailById
);

module.exports = storeRoute;
