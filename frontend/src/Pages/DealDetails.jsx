import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import EditDeal from "../components/EditDeal";

export default function DealDetails({ deals, customers }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const deal = deals.find((deal) => deal.id === parseInt(id));

    if (!deal) {
        return <div className="p-6">Deal not found</div>;
    }
    const customer = customers.find((c) => c.id === deal.customerId);
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex-1 flex flex-col">
                <Topbar title="Deal Details" onAddNew={() => alert("New action")} />

                <div className="flex flex-1 p-6 gap-6 overflow-y-auto">
                    <div className="flex-1 bg-white rounded-2xl shadow p-6">
                        {/* Header */}
                        <div className="flex justify-between items-center border-b pb-4 mb-4">
                            <h2 className="text-xl font-bold">{deal.title}</h2>
                            <div className="flex gap-2">
                                <button
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Deal
                                </button>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm">
                                    Delete Deal
                                </button>
                            </div>
                        </div>

                        {/* Customer Profile */}
                        {deal.customerId && (
                            <div
                                className="flex items-center gap-3 p-4 border rounded-lg mb-6 cursor-pointer hover:bg-gray-50 transition"
                                onClick={() => navigate(`/customer/${deal.customerId}`)}
                            >
                                <img
                                    src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}

                                    className="w-12 h-12 rounded-full border"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {customer.name || "Unknown Customer"}
                                    </p>
                                    <p className="text-sm text-gray-500">View Profile</p>
                                </div>
                            </div>
                        )}

                        {/* Deal Details */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="font-semibold">{deal.status}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Value</p>
                                <p className="font-semibold">{deal.value}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Created At</p>
                                <p className="font-semibold">{deal.createdAt}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Description</p>
                            <p className="text-gray-700">{deal.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Deal Modal */}
            {isEditing && <EditDeal deal={deal} onClose={() => setIsEditing(false)} />}
        </div>
    );
}
