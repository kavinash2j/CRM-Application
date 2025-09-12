// components/SearchModal.jsx
import React, { useState } from "react";
import { X, Users, Briefcase } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchModal({ onClose }) {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("all"); // all | customers | leads
    const navigate = useNavigate();

    // ✅ Get data from Redux store
    const customers = useSelector((state) => state.customers.customers);
    const leads = useSelector((state) => state.leads.leads);

    // Filtered results
    const getResults = () => {
        let results = [];
        if ((filter === "all" || filter === "customers") && customers) {
            results.push(
                ...customers
                    .filter((c) =>
                        (c.name || "").toLowerCase().includes(query.toLowerCase())
                    )
                    .map((c) => ({ id: c._id, type: "Customer", value: c.name }))
            );
        }
        if ((filter === "all" || filter === "leads") && leads) {
            results.push(
                ...leads
                    .filter((l) =>
                        (l.title || "").toLowerCase().includes(query.toLowerCase())
                    )
                    .map((l) => ({ id: l._id, type: "Lead", value: l.title }))
            );
        }
        return results;
    };

    const results = getResults();

    const handleClick = (item) => {
        if (item.type === "Customer") {
            navigate(`/customer/${item.id}`);
        } else if (item.type === "Lead") {
            navigate(`/lead/${item.id}`);
        }
        onClose(); // Close modal after navigation
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-6 bg-black/40 backdrop-blur-md">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">Search</h2>

                {/* Search Input */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type to search..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                {/* Filter Tabs */}
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium ${filter === "all"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("customers")}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium ${filter === "customers"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        <Users size={16} /> Customers
                    </button>
                    <button
                        onClick={() => setFilter("leads")}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium ${filter === "leads"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        <Briefcase size={16} /> Leads
                    </button>
                </div>

                {/* Search Results */}
                <div className="max-h-64 overflow-y-auto">
                    {results.length > 0 ? (
                        results.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => handleClick(item)}
                                className="p-2 border-b last:border-none hover:bg-gray-50 rounded-md cursor-pointer"
                            >
                                <span className="text-gray-800">{item.value}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm italic">No results found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
