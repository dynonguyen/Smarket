const statisticRoute = require('express').Router();
const { response } = require('express');
const statisticController = require('../../controllers/admin/statistic.controller');

statisticRoute.get('/region', statisticController.getRegionStatistic);
statisticRoute.get('/income', statisticController.getIncome);

module.exports = statisticRoute;
