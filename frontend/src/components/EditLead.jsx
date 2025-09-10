import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLead } from "../Redux/DataRedux"; // adjust path to your slice

export default function EditLead({ lead, onClose }) {
    const dispatch = useDispatch();

    // Initialize state with lead data
    const [title, setTitle] = useState(lead?.title || "");
    const [description, setDescription] = useState(lead?.description || "");
    const [status, setStatus] = useState(lead?.status || "Pending");
    const [value, setValue] = useState(lead?.value || "");
    const [createdAt, setCreatedAt] = useState(
        lead?.createdAt ? new Date(lead.createdAt).toISOString().slice(0, 16) : ""
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedLead = {
            ...lead,
            title,
            description,
            status,
            value,
            createdAt,
        };

        // Dispatch the update action to Redux
        dispatch(updateLead(updatedLead));

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
                            placeholder="Lead Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded-lg p-2 text-sm"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Description</label>
                        <textarea
                            placeholder="Lead Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border rounded-lg p-2 text-sm resize-none h-24"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
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
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full border rounded-lg p-2 text-sm"
                        />
                    </div>

                    {/* Created At */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Created At</label>
                        <input
                            type="datetime-local"
                            value={createdAt}
                            onChange={(e) => setCreatedAt(e.target.value)}
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
