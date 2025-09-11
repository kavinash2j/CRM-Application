const { validationResult } = require("express-validator")
const customerModel = require("../models/customer.models")

module.exports.getCustomer = async (req, res) => {

}

module.exports.deleteCustomer = async (req, res) => {
    res.send("this is Customer delete route")
}

module.exports.updateCustomer = async (req, res) => {
    res.send("this is Customer update route")
}

module.exports.addCustomer = async (req, res) => {

    console.log("route hit new  cutsomer hit")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log("route hit new  cutsomer hit - 2")
    try {
        const { name, email, phone, company } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        // ownerId comes from verified token
        console.log(req.user);
        const ownerId = req.user.id;
        // console.log();
        const newCustomer = new customerModel({
            name,
            email,
            phone,
            company,
            ownerId,
        });

        await newCustomer.save();
        res.status(201).json({ message: "Customer added successfully", customer: newCustomer });
    } catch (err) {
        console.error("Error adding customer:", err);
        res.status(500).json({ error: "Failed to add customer" });
    }
};
