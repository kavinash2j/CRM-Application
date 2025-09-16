import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditCustomer from "./EditCustomer";
import { deleteCustomer } from "../Redux/customerThunks"; // Adjust path
import { fetchLeads } from "../Redux/leadThunks";

export const CustomerPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const customers = useSelector((state) => state.customers.customers);
    const leads = useSelector((state) => state.leads.leads);

    const { _id } = useParams();

    const [isEditingPanel, setIsEditingPanel] = useState(false);

    const customer = customers.find((c) => c._id == _id);

    const customerLeads = leads.filter((d) => d.customerId._id === customer._id);

    if (!customer) return <div className="p-6">Customer not found</div>;

    // Delete handler
    const handleDelete = () => {
        if (window.confirm("Deleting customer can also delete leads associated with it. Are you sure?")) {

            dispatch(deleteCustomer(customer._id));

            navigate("/customers"); // redirect to customers list
        }
    };

    return (
        <div className="flex flex-col flex-1 space-y-8">
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                    <div className="flex items-center justify-between">
                        {/* Left section */}
                        <div className="flex items-center gap-6">
                            <img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                alt={customer.name}
                                className="w-24 h-24 rounded-full shadow-md border-2 border-indigo-200"
                            />
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-gray-900">{customer.name}</h2>
                                <p className="text-gray-500">
                                    <span className="font-medium text-gray-700">Company:</span>{" "}
                                    {customer.company || "—"}
                                </p>
                                <p className="text-gray-500">
                                    <span className="font-medium text-gray-700">Email:</span>{" "}
                                    {customer.email || "—"}
                                </p>
                                <p className="text-gray-500">
                                    <span className="font-medium text-gray-700">Phone:</span>{" "}
                                    {customer.phone || "—"}
                                </p>
                                {customer.address && (
                                    <p className="text-gray-500">
                                        <span className="font-medium text-gray-700">Address:</span>{" "}
                                        {customer.address}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 self-center">
                            <button
                                onClick={() => setIsEditingPanel(true)}
                                className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-sm transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-sm transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* Leads Section */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-6 text-gray-900">Customer Leads</h3>
                    {customerLeads.length > 0 ? (
                        <ul className="grid md:grid-cols-2 gap-6">
                            {customerLeads.map((d) => (
                                <li
                                    key={d._id}
                                    onClick={() => navigate(`/leads/${d._id}`)}
                                    className="p-5 border rounded-xl hover:shadow-md transition bg-gray-50 hover:bg-indigo-50 cursor-pointer"
                                >
                                    <p className="font-semibold text-gray-900">{d.title}</p>
                                    <p className="text-sm text-gray-500 mb-2">₹{d.value}</p>
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${d.status === "In Progress"
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
                        <p className="text-gray-500">No leads found</p>
                    )}
                </div>
            </div>

            {isEditingPanel && <EditCustomer customer={customer} onClose={() => setIsEditingPanel(false)} />}
        </div>
    );
};
