import { useParams } from "react-router-dom";
import { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import EditDeal from "../components/EditDeal";

const deals = [
    {
        id: 1,
        customer: "Deanna Annis",
        email: "brodrigues@gmail.com",
        phone: "617-952-4069",
        address: "2893 Austin Secret Lane, Parowan, UT 12413",
        progress: "In Progress",
        appointment: "Nov 17, 2021 08:00",
        area: "25 M²",
        people: 10,
        price: "$6000",
        access: "Keys with doorman",
        instructions:
            "At risus viverra adipiscing in at tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.",
        activity: [
            {
                date: "17 Nov 2021",
                text: "Installation or inspection of your thermostat",
            },
            {
                date: "16 Nov 2021",
                text: "Installation of the new air conditioning system",
            },
            {
                date: "16 Nov 2021",
                text: "Evaluation and removal of the old system",
            },
        ],
    }
];



export default function DealDetails() {
    // const { id = 1 } = useParams();
    const id = 1
    const [isEditing, setIsEditing] = useState(false);

    const deal = deals.find((deal) => deal.id === parseInt(id));


    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex-1 flex flex-col">
                <Topbar title="Deal Details" onAddNew={() => alert("New action")} />

                <div className="flex flex-1 p-6 gap-6 overflow-y-auto">
                    {/* Left Content */}
                    <div className="flex-1 bg-white rounded-2xl shadow p-6">
                        {/* Customer Info */}
                        <div className="flex justify-between items-center border-b pb-4 mb-4">
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-sm text-gray-500">Customer</p>
                                    <p className="font-semibold">{deal.customer}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold">{deal.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-semibold">{deal.phone}</p>
                                </div>
                            </div>

                            {/* Edit & Delete Deal Buttons */}
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

                        {/* Address */}
                        <h2 className="text-xl font-bold mb-6">{deal.address}</h2>

                        {/* Deal Details Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="text-sm text-gray-500">Progress</p>
                                <p className="font-semibold">{deal.progress}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Appointment Date</p>
                                <p className="font-semibold">{deal.appointment}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Room Area</p>
                                <p className="font-semibold">{deal.area}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Number of people</p>
                                <p className="font-semibold">{deal.people}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Price</p>
                                <p className="font-semibold">{deal.price}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Room Access</p>
                                <p className="font-semibold">{deal.access}</p>
                            </div>
                        </div>

                        {/* Special Instructions */}
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Special Instructions</p>
                            <p className="text-gray-700">{deal.instructions}</p>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 bg-white rounded-2xl shadow p-6 flex flex-col">
                        {/* Activity Log */}
                        <div className="flex-1">
                            <h3 className="font-semibold mb-3">Activity Log</h3>
                            <div className="space-y-4">
                                {deal.activity.map((item, idx) => (
                                    <div key={idx} className="border rounded-lg p-3">
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                        <p className="text-gray-700 text-sm">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="text-indigo-600 text-sm mt-4">Load More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Deal Modal */}
            {isEditing && <EditDeal deal={deal} onClose={() => setIsEditing(false)} />}
        </div>
    );
}
