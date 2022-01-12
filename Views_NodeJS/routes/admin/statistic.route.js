const statisticRoute = require('express').Router();
const statisticController = require('../../controllers/admin/statistic.controller');

statisticRoute.get('/region', statisticController.getRegionStatistic);
statisticRoute.get('/product', statisticController.getProductStatistic);
statisticRoute.get('/product/amount-type', statisticController.getProductEachType)
module.exports = statisticRoute;
