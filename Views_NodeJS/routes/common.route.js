const commonRoute = require('express').Router();
const commonController = require('../controllers/common.controller.js');

commonRoute.get('/province-all', commonController.getProvince);

commonRoute.get('/district', commonController.getDistrict);

commonRoute.get('/ward', commonController.getWard);

commonRoute.get('/product/:productId', commonController.getProductPage);

commonRoute.get('/categories/:groupId', commonController.productEachType);
commonRoute.get(
  '/categories/:groupId/view-more',
  commonController.viewMoreProducts
);
commonRoute.get('/categories/:groupId/sort', commonController.sortProducts);

commonRoute.get('/search', commonController.searchProducts);
commonRoute.get('/search/more', commonController.viewMoreProductsSearch);

commonRoute.get('/store/:storeId', commonController.getStoreInfo);

module.exports = commonRoute;
