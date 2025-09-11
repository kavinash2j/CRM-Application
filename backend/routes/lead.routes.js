const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const leadController = require("../controllers/lead.controller")


router.route("/:id")
    .get(authMiddleware, leadController.getLead)
    .delete(authMiddleware, leadController.deleteLead)
    .put(authMiddleware, leadController.updateLead)

router.post("/new", leadController.addLead);


module.exports = router