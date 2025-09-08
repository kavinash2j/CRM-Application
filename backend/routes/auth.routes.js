const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.models");

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register",);


router.post("/login",);

module.exports = router;
