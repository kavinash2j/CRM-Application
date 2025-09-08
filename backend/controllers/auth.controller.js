const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.models");

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = user.comparePassword;
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}

module.exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: passwordHash
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "error in the register route", error: err.message });
    }
}
