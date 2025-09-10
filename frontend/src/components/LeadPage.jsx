// src/pages/leads/LeadDetailsContent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditLead from "./EditLead";
import AddNewModal from "./AddNewModal";
import { deleteLead } from "../Redux/DataRedux"; // Adjust path

export default function LeadPage({ showModal, setShowModal, leadId }) {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers.customers);
    const leads = useSelector((state) => state.leads.leads);
    const navigate = useNavigate();
    const [isEditingPanel, setIsEditingPanel] = useState(false);

    const lead = leads.find((lead) => lead.id === parseInt(leadId));
    if (!lead) return <div className="p-6">Lead not found</div>;

    const customer = customers.find((c) => c.id === lead.customerId);

    // Delete lead handler
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this lead?")) {
            dispatch(deleteLead(lead.id));
            navigate("/leads"); // Redirect to leads list after deletion
        }
    };

    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start border-b pb-5 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{lead.title}</h2>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsEditingPanel(true)}
                        className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                    >
                        Edit Lead
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
                    >
                        Delete Lead
                    </button>
                </div>
            </div>

            {/* Customer Profile */}
            {lead.customerId && (
                <div
                    onClick={() => navigate(`/customer/${lead.customerId}`)}
                    className="flex items-center gap-4 p-5 border rounded-xl cursor-pointer hover:bg-gray-50 transition"
                >
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Customer"
                        className="w-14 h-14 rounded-full border object-cover"
                    />
                    <div>
                        <p className="font-semibold text-gray-900 text-lg">{customer?.name || "Unknown Customer"}</p>
                        <p className="text-sm text-gray-500">
                            {customer?.email || "No email"} • {customer?.phone || "No phone"}
                        </p>
                        <p className="text-xs text-indigo-600 font-medium">View Full Profile →</p>
                    </div>
                </div>
            )}

            {/* Lead Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="p-5 border rounded-xl bg-gray-50 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <p className="text-lg font-semibold text-gray-800">{lead.status}</p>
                </div>
                <div className="p-5 border rounded-xl bg-gray-50 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Value</p>
                    <p className="text-lg font-semibold text-green-600">${lead.value}</p>
                </div>
                <div className="p-5 border rounded-xl bg-gray-50 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Created At</p>
                    <p className="text-lg font-semibold text-gray-800">{lead.createdAt}</p>
                </div>
            </div>

            {/* Description */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                <div className="p-5 border rounded-xl bg-gray-50 shadow-sm">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{lead.description}</p>
                </div>
            </div>

            {isEditingPanel && <EditLead lead={lead} onClose={() => setIsEditingPanel(false)} />}
            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
        </div>
    );
}
