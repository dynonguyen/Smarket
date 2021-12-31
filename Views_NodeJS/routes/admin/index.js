const managementRoute = require('./management.route');
const statisticRoute = require('./statistic.route');
const adminRoute = require('express').Router();

adminRoute.get('/', (req, res) => res.redirect('/admin/statistic/region'));
adminRoute.use('/statistic', statisticRoute);
adminRoute.use('/management', managementRoute);

module.exports = adminRoute;
