import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLead } from "../Redux/leadThunks";
import { useParams } from "react-router-dom";

export default function EditLead({ lead, onClose }) {
    const dispatch = useDispatch();
    const { _id } = useParams();

    // ✅ one form state for all fields
    const [form, setForm] = useState({
        title: lead?.title || "",
        description: lead?.description || "",
        status: lead?.status || "Pending",
        value: lead?.value || "",
        createdAt: lead?.createdAt
            ? new Date(lead.createdAt).toISOString().slice(0, 16)
            : "",
    });

    // ✅ update handler for all inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateLead({ _id, leadData: { ...form } }));

        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center 
                        backdrop-blur-md bg-black/30 z-50">
            <div
                className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative 
                           max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>

                <h2 className="text-lg font-semibold mb-4">Edit Lead</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Lead Title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 text-sm"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Description</label>
                        <textarea
                            name="description"
                            placeholder="Lead Description"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 text-sm resize-none h-24"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Status</label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 text-sm"
                        >
                            <option>Contacted</option>
                            <option>In Progress</option>
                            <option>Closed</option>
                            <option>Pending</option>
                        </select>
                    </div>

                    {/* Value / Price */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Value ($)</label>
                        <input
                            type="number"
                            name="value"
                            value={form.value}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 text-sm"
                        />
                    </div>

                    {/* Created At */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Created At</label>
                        <input
                            type="datetime-local"
                            name="createdAt"
                            value={form.createdAt}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 mt-4"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
