import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLead } from "../Redux/DataRedux"; // 👈 adjust path to your file

export default function AddLead({ onClose, setStep }) {
    const dispatch = useDispatch();
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const customers = useSelector((state) => state.customers.customers);

    const [formData, setFormData] = useState({
        title: "",
        address: "",
        description: "",
        status: "Contacted",
        value: "",
        createdAt: new Date().toISOString().slice(0, 10), // today by default
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedCustomer) return;

        const newLead = {
            id: Date.now(), // unique ID
            customerId: selectedCustomer.id,
            ...formData,
        };

        dispatch(addLead(newLead)); // 👉 send to Redux
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-white rounded-2xl w-[95%] sm:w-full max-w-lg mx-auto shadow-xl max-h-[85vh] flex flex-col">
                {/* Header */}
                <div className="p-4 sm:p-6 border-b sticky top-0 bg-white z-10 rounded-t-2xl">
                    <h2 className="text-lg sm:text-xl font-semibold">Add New Lead</h2>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
                    {/* Customer selector */}
                    <div>
                        {customers.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {customers.map((customer) => (
                                    <div
                                        key={customer.id}
                                        onClick={() => setSelectedCustomer(customer)}
                                        className={`p-3 border rounded-xl cursor-pointer text-center ${selectedCustomer?.id === customer.id
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <span className="font-medium text-sm">{customer.name}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm">No customers available</p>
                        )}
                    </div>

                    {/* Lead Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                                rows={3}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                            >
                                <option>New</option>
                                <option>Contacted</option>
                                <option>Converted</option>
                                <option>Lost</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Value ($)</label>
                            <input
                                type="number"
                                name="value"
                                value={formData.value}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Created At</label>
                            <input
                                type="date"
                                name="createdAt"
                                value={formData.createdAt}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="p-4 sm:p-6 border-t flex justify-between gap-3 sticky bottom-0 bg-white z-10 rounded-b-2xl">
                    <button
                        type="button"
                        onClick={() => setStep("choose")}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                        Back
                    </button>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={!selectedCustomer}
                            className={`px-4 py-2 rounded-lg text-white ${selectedCustomer
                                ? "bg-indigo-600 hover:bg-indigo-700"
                                : "bg-gray-300 cursor-not-allowed"
                                }`}
                        >
                            Save Lead
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
