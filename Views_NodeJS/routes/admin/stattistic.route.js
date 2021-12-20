const statisticRoute = require('express').Router();
const statisticController = require('../../controllers/admin/statistic.controller');

statisticRoute.get('/region', statisticController.getRegionStatistic);

module.exports = statisticRoute;
