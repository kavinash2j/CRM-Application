const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const customerControllers = require("../controllers/customer.controller")

router.route("/:id")
    .get(authMiddleware, customerControllers.getCustomer)
    .delete(authMiddleware, customerControllers.deleteCustomer)
    .put(authMiddleware, customerControllers.updateCustomer)

router.post("/new", customerControllers.addCustomer)

module.exports = router;