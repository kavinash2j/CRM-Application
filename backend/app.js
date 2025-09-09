require("dotenv").config();
const express = require("express");
const app = express();
const cookies_parser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
const customerRoute = require("./routes/customer.routes")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookies_parser());

app.use("/api", authRoutes);


app.get("/", (req, res) => {
    res.send("hello")
})



module.exports = app;