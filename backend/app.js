require("dotenv").config();
const express = require("express");
const app = express();
const cookies_parser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookies_parser());

app.use("/", authRoutes);

module.exports = app;