const commonRoute = require('express').Router();
const commonController = require('../controllers/common.controller.js');


commonRoute.get('/province-all', commonController.getProvince);

commonRoute.get('/district', commonController.getDistrict);

commonRoute.get('/ward', commonController.getWard);

module.exports = commonRoute;