const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ["New", "Contacted", "Converted", "Lost"],
        default: "New"
    },
    value: {
        type: Number,
        default: 0,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;