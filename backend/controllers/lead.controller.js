const leadModel = require("../models/lead.models")
const { validationResult } = require("express-validator");

module.exports.getLead = async (req, res) => {
    res.send("this is get lead route")
}

module.exports.deleteLead = async (req, res) => {
    res.send("this is lead delete route")
}

module.exports.updateLead = async (req, res) => {
    res.send("this is lead update route")
}

module.exports.addLead = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
    }
    console.log("add lead route hit")
    try {
        const leadData = req.body;

        const newLead = new leadModel({
            customerId: leadData.customerId,
            title: leadData.title,
            description: leadData.description,
            status: leadData.status || "New",
            value: leadData.value,
        });
        console.log(newLead);
        await newLead.save();

        res.status(201).json({
            message: "New lead added successfully",
            lead: newLead,
        });

    } catch (error) {
        console.error("Error adding lead:", error);
        res.status(500).json({ error: "Server error while adding lead" });
    }
}