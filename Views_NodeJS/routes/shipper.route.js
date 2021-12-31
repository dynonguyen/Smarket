const shipperRoute = require("express").Router();
const shipperController = require("../controllers/shipper.controller");

shipperRoute.get("/", (req, res) => res.redirect("/shipper/order-history"));

shipperRoute.get("/order-history", shipperController.getOrderHistory);

shipperRoute.get("/order-info/:orderId", shipperController.getOrderInfo);

module.exports = shipperRoute;
