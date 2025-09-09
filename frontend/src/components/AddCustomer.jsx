import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AddCustomer({ onClose }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("✅ New Customer Added:", form);
        onClose();
    };

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 w-[500px] shadow-xl"
        >
            <h2 className="text-lg font-semibold mb-6">Add New Customer</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Avatar Upload */}
                <div>
                    <label className="block text-sm font-medium mb-2">Avatar</label>
                    <button
                        type="button"
                        className="w-20 h-20 border rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                    >
                        ADD
                    </button>
                </div>

                {/* First + Last Name */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium">Street Address</label>
                    <input
                        type="text"
                        name="street"
                        value={form.street}
                        onChange={handleChange}
                        className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium">City</label>
                        <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">State / Province</label>
                        <input
                            type="text"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Zip Code</label>
                        <input
                            type="text"
                            name="zip"
                            value={form.zip}
                            onChange={handleChange}
                            className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                        Save Customer
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
