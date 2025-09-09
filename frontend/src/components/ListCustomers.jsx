import React from "react";
import { useNavigate } from "react-router-dom";



export default function ListCustomers({ customers }) {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header Row */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-sm font-medium">Total: {customers.length} customers</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                        Sort by: Date Created
                    </button>
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                        Filter
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left text-gray-500 text-sm border-b">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Address</th>
                            <th className="p-3">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr
                                key={customer.id}
                                className="hover:bg-gray-50 border-b cursor-pointer"
                                onClick={() => navigate(`/customer/${customer.id}`)}
                            >
                                <td className="p-3 flex items-center gap-3">
                                    <img
                                        src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                                        alt={customer.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    {customer.name}
                                </td>
                                <td className="p-3">{customer.email}</td>
                                <td className="p-3">{customer.phone}</td>
                                <td className="p-3">{customer.address}</td>
                                <td className="p-3 text-gray-500">✏️</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Load More */}
                <div className="flex justify-center p-4">
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
}
