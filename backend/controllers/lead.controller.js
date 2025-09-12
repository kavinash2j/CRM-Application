const leadModel = require("../models/lead.models")
const { validationResult } = require("express-validator");
const customerModel = require("../models/customer.models")

module.exports.getLead = async (req, res) => {
    try {
        const userId = req.user._id;

        // Step 1: Find all customers owned by this user
        const customers = await customerModel.find({ ownerId: userId }).select("_id");

        // Step 2: Extract customer IDs
        const customerIds = customers.map((c) => c._id);

        // Step 3: Find leads linked to these customers
        const leads = await leadModel.find({ customerId: { $in: customerIds } }).populate("customerId");

        res.status(200).json(leads);
    } catch (err) {

        console.error("Error fetching leads:", err);
        res.status(500).json({ message: "Failed to fetch leads", error: err.message });

    }
};

module.exports.deleteLead = async (req, res) => {
    try {
        const { id } = req.params; // get lead id from params

        const deletedLead = await leadModel.findByIdAndDelete(id);

        if (!deletedLead) {
            return res.status(404).json({ message: "Lead not found" });
        }

        res.json({ message: "Lead deleted successfully", lead: deletedLead });
    } catch (error) {

        console.error("Error deleting lead:", error);
        res.status(500).json({ message: "Server error while deleting lead" });

    }
};

module.exports.updateLead = async (req, res) => {
    try {
        const { id } = req.params; // id from params
        const leadData = req.body; // updated fields from body
        console.log(leadData);
        const updatedLead = await leadModel.findByIdAndUpdate(id, leadData, {
            new: true, // return the updated document
            runValidators: true, // ensure schema validation
        });
        console.log(updatedLead);
        if (!updatedLead) {
            return res.status(404).json({ message: "Lead not found" });
        }

        res.json({ message: "Lead updated successfully", lead: updatedLead });
    } catch (error) {
        console.error("Error updating lead:", error);
        res.status(500).json({ message: "Server error while updating lead" });
    }
};


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