const managementRoute = require('./management.route');
const statisticRoute = require('./stattistic.route');
const adminRoute = require('express').Router();

adminRoute.use('/statistic', statisticRoute);
adminRoute.use('/management', managementRoute);

module.exports = adminRoute;
