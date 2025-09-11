require("dotenv").config();
const express = require("express");
const app = express();
const cookies_parser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
const customerRoute = require("./routes/customer.routes")
const leadRoute = require("./routes/lead.routes")

app.use(cors(
    {
        origin: "http://localhost:5173", // your React app
        credentials: true,              // allow cookies / auth headers
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookies_parser());

app.use("/api", authRoutes);
app.use("/customer", customerRoute)
app.use("/lead", leadRoute)

app.get("/", (req, res) => {
    res.send("hello")
})



module.exports = app;