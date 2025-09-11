const jwt = require("jsonwebtoken");
const userModel = require("../models/User.models.js");
const { verify } = require("crypto");

const authMiddleware = async (req, res, next) => {
    try {
        console.log("middlear hit")
        let token = null;

        // 1. Check Authorization header
        const authHeader = req.headers["authorization"];
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        }

        // 2. If not in header, check cookies
        if (!token && req.cookies?.token) {
            token = req.cookies.token;
        }
        console.log("from middlewaer token = ", token);
        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded)
        const user = await userModel.findById(decoded._id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        console.log("middlewear hit-2");
        next();

    } catch (err) {

        console.error("Auth error:", err.message);
        res.status(401).json({ message: "Invalid or expired token" });

    }
};




module.exports = { authMiddleware };
