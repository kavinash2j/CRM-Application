const { validationResult } = require("express-validator")
const customerModel = require("../models/customer.models")
const leadModel = require("../models/lead.models");

module.exports.getCustomer = async (req, res) => {
    try {
        const userId = req.user.id; // assuming you already verified the token and set req.user

        const customers = await customerModel.find({ ownerId: userId });

        res.status(200).json(customers); // return only this user's customers
    } catch (err) {

        // console.error("Error fetching customers:", err);
        res.status(500).json({ message: "Failed to fetch customers", error: err.message });

    }
};

module.exports.deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;

        // 🔹 Check ownership of customer
        const customer = await customerModel.findOne({ _id: id, ownerId: userId });
        if (!customer) {
            return res.sendStatus(404);
        }

        // 🔹 Delete customer
        const deletedCustomer = await customerModel.findByIdAndDelete(id);

        // 🔹 Delete related leads
        const deletedLeads = await leadModel.deleteMany({ customerId: id });

        // 🔹 Verify both deletions
        if (deletedCustomer && deletedLeads.acknowledged) {
            return res.sendStatus(200);
        } else {
            return res.sendStatus(500);
        }
    } catch (err) {
        // console.error("Error deleting customer:", err);
        return res.sendStatus(500);
    }
};


const Customer = require("../models/customer.models");

// 🔹 Update customer
module.exports.updateCustomer = async (req, res) => {
    try {

        const { id } = req.params;   // customer ID from URL
        const customerData = req.body;    // updated fields from body

        const updatedCustomer = await customerModel.findByIdAndUpdate(
            id,
            customerData,
            { new: true, runValidators: true } // return updated doc, validate against schema
        );

        if (!updatedCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer updated successfully", customer: updatedCustomer });
    } catch (err) {
        // console.error("Error updating customer:", err);
        res.status(500).json({ message: "Failed to update customer", error: err.message });
    }
};


module.exports.addCustomer = async (req, res) => {

    // console.log("route hit new  cutsomer hit")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // console.log("route hit new  cutsomer hit - 2")
    try {
        const { name, email, phone, company } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        // ownerId comes from verified token
        // console.log(req.user);
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
        // console.error("Error adding customer:", err);
        res.status(500).json({ error: "Failed to add customer" });
    }
};
