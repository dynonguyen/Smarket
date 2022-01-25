const storeRoute = require('express').Router();
const storeController = require('../controllers/store.controller');
const upload = require('../configs/multer.config');

const cpUpload = upload.fields([
  {
    name: 'certificate',
  },
]);

storeRoute.get('/', (req, res) => res.redirect('/store/product-list'));
storeRoute.get('/product-list', storeController.getProductByStore);
storeRoute.get(
  '/product-list/:productId',
  storeController.getProductDetailById
);
storeRoute.get('/product-add', storeController.getAddProductPage);
storeRoute.post('/product-add', cpUpload, storeController.addProduct);

module.exports = storeRoute;
