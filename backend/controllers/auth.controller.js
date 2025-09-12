const userModel = require("../models/User.models");
const { validationResult } = require("express-validator");

module.exports.loginController = async (req, res) => {

    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select("+password");
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = await user.generateAuthToken();

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,       // ✅ required in production (HTTPS)
            sameSite: "none"    // ✅ required for cross-site
        });

        res.json({ token });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}

module.exports.registerController = async (req, res) => {
    // console.log("/resiter route hit")
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashPassword = await userModel.hashPassword(password);

        const newUser = new userModel({
            name,
            email,
            password: hashPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully", });

    } catch (err) {
        res.status(500).json({ message: "error in the register route", error: err });
    }
}
