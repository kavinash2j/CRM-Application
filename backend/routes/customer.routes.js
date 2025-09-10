const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");

router.post("/profile", authMiddleware, (req, res) => {
    console.log("profile route hit")
    res.json(req.user);
})

module.exports = router;