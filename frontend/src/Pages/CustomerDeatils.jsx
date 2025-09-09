import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EditCustomer from "../components/EditCustomer"; // import modal



export default function CustomerDetails({ customers, deals }) {
    const { id } = useParams();
    const [isEditOpen, setIsEditOpen] = useState(false);

    // // For now we’ll just pick the first customer as placeholder
    // const customer = customers[0];
    // const customerDeals = deals.filter((d) => d.customerId === customer.id);
    const customer = customers.find((c) => c.id === parseInt(id));
    const customerDeals = deals.filter((d) => d.customerId === customer.id);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Topbar title="Customer Details" onAddNew={() => alert("New action")} />

                <div className="flex-1 overflow-y-auto p-6">
                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl shadow p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <img src={customer.avatar} alt={customer.name} className="w-20 h-20 rounded-full" />
                                <div>
                                    <h2 className="text-xl font-bold">{customer.name}</h2>
                                    <p className="text-gray-600">{customer.email}</p>
                                    <p className="text-gray-600">{customer.phone}</p>
                                    <p className="text-gray-600">{customer.address}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsEditOpen(true)}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => alert("Delete customer")}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Deals Section */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold text-lg mb-4">Deals</h3>
                        {customerDeals.length > 0 ? (
                            <ul className="space-y-3">
                                {customerDeals.map((d) => (
                                    <li key={d.id} className="p-4 border rounded-lg hover:bg-gray-50">
                                        <p className="font-semibold">{d.address}</p>
                                        <p className="text-sm text-gray-600">{d.price}</p>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs ${d.status === "In Progress"
                                                ? "bg-indigo-100 text-indigo-700"
                                                : "bg-gray-200 text-gray-700"
                                                }`}
                                        >
                                            {d.status}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No deals found</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {isEditOpen && (
                <EditCustomer customer={customer} onClose={() => setIsEditOpen(false)} />
            )}
        </div>
    );
}
