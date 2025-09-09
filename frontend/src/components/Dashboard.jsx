import React from "react";
import { Link } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function Dashboard({ customers, deals }) {
    // Chart data
    // Calculate last 6 months of deals
    const chartData = Array.from({ length: 6 }, (_, i) => {
        const date = new Date();
        date.setMonth(date.getMonth() - (5 - i)); // go back 5,4,...,0 months

        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();

        // Count deals in this month & year
        const dealsCount = deals.filter((d) => {
            const dDate = new Date(d.createdAt);
            return dDate.getMonth() === date.getMonth() && dDate.getFullYear() === year;
        }).length;

        return { name: month, deals: dealsCount };
    });


    // Pick the next appointment (just take first In Progress deal)
    const nextAppointment = deals.find((d) => d.status === "In Progress");

    return (
        <div className="p-6 grid grid-cols-12 gap-6">
            {/* Left Section */}
            <div className="col-span-8 grid grid-cols-2 gap-6">
                {/* Next Appointment */}
                {nextAppointment && (
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6 rounded-2xl">
                        <h2 className="font-semibold text-lg">Next Appointment</h2>
                        <p className="mt-4">{nextAppointment.address}</p>
                        <p className="text-sm">
                            {customers.find((c) => c.id === nextAppointment.customerId)?.name}
                        </p>
                        <p className="mt-4 text-sm">{nextAppointment.createdAt}</p>
                        <div className="flex justify-between items-center mt-6">
                            <span className="font-bold text-xl">${nextAppointment.value}</span>
                            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg">
                                See Detail
                            </button>
                        </div>
                    </div>
                )}

                {/* Customers + Deals Count */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Customers */}
                    <Link
                        to="/customers"
                        className="group bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-2xl shadow hover:shadow-md transition-all flex flex-col items-center justify-center"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-indigo-200 text-indigo-700 rounded-full mb-4 group-hover:scale-110 transition">
                            👥
                        </div>
                        <p className="text-gray-600 text-sm">Customers</p>
                        <p className="text-3xl font-bold text-indigo-700">{customers.length}</p>
                    </Link>

                    {/* Deals */}
                    <Link
                        to="/deals"
                        className="group bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow hover:shadow-md transition-all flex flex-col items-center justify-center"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-200 text-blue-700 rounded-full mb-4 group-hover:scale-110 transition">
                            💼
                        </div>
                        <p className="text-gray-600 text-sm">Deals</p>
                        <p className="text-3xl font-bold text-blue-700">{deals.length}</p>
                    </Link>
                </div>


                {/* Recent Deals */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold">Recent Deals</h2>
                        <Link to="/deals" className="text-indigo-600 text-sm hover:underline">
                            See More
                        </Link>
                    </div>
                    <ul className="mt-4 space-y-3">
                        {deals.slice(0, 4).map((deal) => (
                            <li key={deal.id} className="flex justify-between text-sm">
                                <span>{deal.address}</span>
                                <span>${deal.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Deals Overview Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="font-semibold mb-4">Deals Overview</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="deals" fill="#4F46E5" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Right Section */}
            <div className="col-span-4 flex flex-col gap-6">
                {/* Customers List */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold">Customers</h2>
                        <Link to="/customers" className="text-indigo-600 text-sm hover:underline">
                            See More
                        </Link>
                    </div>
                    <ul className="mt-4 space-y-3">
                        {customers.slice(0, 4).map((c) => (
                            <li key={c.id}>
                                <p className="font-medium">{c.name}</p>
                                <p className="text-xs text-gray-500">{c.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tasks */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="font-semibold">Tasks To Do</h2>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex justify-between">
                            <span>30 Nov 2021</span> <span>Meeting with partners</span>
                        </li>
                        <li className="flex justify-between">
                            <span>24 Dec 2021</span> <span>Web conference agenda</span>
                        </li>
                        <li className="flex justify-between">
                            <span>24 Nov 2022</span> <span>Weekly meeting</span>
                        </li>
                    </ul>
                    <button className="mt-4 text-indigo-600">+ Add new task</button>
                </div>
            </div>
        </div>
    );
}
