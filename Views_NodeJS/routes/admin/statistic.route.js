const statisticRoute = require('express').Router();
const { response } = require('express');
const statisticController = require('../../controllers/admin/statistic.controller');

statisticRoute.get('/region', statisticController.getRegionStatistic);

statisticRoute.get('/income', statisticController.getIncome);

statisticRoute.get('/product', statisticController.getProductStatistic);
statisticRoute.get('/product/amount-type', statisticController.getProductEachType)

module.exports = statisticRoute;
