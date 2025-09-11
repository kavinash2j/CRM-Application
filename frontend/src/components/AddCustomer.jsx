import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addCustomer } from "../Redux/DataRedux"; // 👈 adjust path to your file
import { createCustomer } from "../Redux/customerThunks";

export default function AddCustomer({ onClose }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        id: Date.now(), // temoparary unique ID
        name: "",
        email: "",
        phone: "",
        company: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCustomer(form)); // 🚀 send to redux store
        onClose();
    };

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 w-[450px] shadow-xl"
        >
            <h2 className="text-lg font-semibold mb-6">Add New Customer</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Customer Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

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

                <div>
                    <label className="block text-sm font-medium">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

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
