const userRoute = require('express').Router();
const userController = require('../controllers/user.controller');

userRoute.get('/purchase', userController.getPurchase);
userRoute.post('/purchase/orders', userController.postOrder);
userRoute.post('/purchase/execute', userController.getExecuteOrder);
userRoute.get(
  '/order/detail/:customerId/:orderId',
  userController.getOrderDetail
);

module.exports = userRoute;
