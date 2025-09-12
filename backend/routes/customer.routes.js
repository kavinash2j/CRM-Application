const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const customerControllers = require("../controllers/customer.controller")
const { body } = require("express-validator");

router.route("/:id")
    .delete(authMiddleware, customerControllers.deleteCustomer)
    .put(authMiddleware, customerControllers.updateCustomer)

router.get("/profile", authMiddleware, customerControllers.getCustomer)


router.post("/new", authMiddleware, [
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 2 })
        .withMessage("Name must be at least 2 characters long"),

    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),

    body("phone")
        .optional()
        .isMobilePhone()
        .withMessage("Invalid phone number"),

    body("company")
        .optional()
        .isLength({ min: 2 })
        .withMessage("Company name must be at least 2 characters"),
]
    , customerControllers.addCustomer)

module.exports = router;