const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const leadController = require("../controllers/lead.controller")
const { body } = require("express-validator");


router.route("/:id")
    .delete(authMiddleware, leadController.deleteLead)
    .put(authMiddleware, leadController.updateLead)

router.post("/new",
    [
        body("customerId")
            .notEmpty()
            .withMessage("Customer ID is required")
            .isMongoId()
            .withMessage("Invalid customer ID format"),
        body("title")
            .notEmpty()
            .withMessage("Title is required")
            .isString()
            .withMessage("Title must be a string"),
        body("status")
            .optional()
            .isIn(["New", "Contacted", "Converted", "Lost"])
            .withMessage("Invalid status"),
        body("value")
            .isNumeric()
            .withMessage("Value must be a number"),
        body("description")
            .isString()
            .withMessage("Description must be text"),
    ],
    leadController.addLead);
router.get("/profile", authMiddleware, leadController.getLead);

module.exports = router