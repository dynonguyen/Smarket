const authRoute = require('express').Router();
const authController = require('../controllers/auth.controller');

authRoute.get('/login', authController.getLogin);
authRoute.get('/logout', authController.getLogout);

authRoute.post('/login', authController.postLogin);

authRoute.get('/signup', authController.getSignUP);
authRoute.post('/signup', authController.postSignUp);

module.exports = authRoute;
