const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { body } = require("express-validator")
const { authMiddleware } = require("../middlewares/authMiddleware")

router.post("/register",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Valid email required"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars")
    ],
    authController.registerController);

router.post("/login",
    [
        body("email").isEmail().withMessage("Valid email required"),
        body("password").isLength({ min: 6 }).withMessage("Password is required")
    ],
    authController.loginController);

router.get("/profile", authMiddleware, (req, res) => {
    console.log("profile route hit")
    console.log("profile route cookis", req.cookies.token)
    res.json(req.user);
})

router.post("/logout", (req, res) => {

    // console.log("requsted the logout")

    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        path: "/",
    });

    res.json({ message: "Logged out successfully" });
});

module.exports = router;
