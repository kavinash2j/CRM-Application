import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { useSelector } from "react-redux";
import { title } from "process";

export default function Dashboard() {
    const navigate = useNavigate();
    const customers = useSelector((state) => state.customers.customers) || [{ name: "No customers" }];
    const leads = useSelector((state) => state.leads.leads) || [{ title: "No leads" }];

    // Pick the next appointment (just take first In Progress lead)
    const nextAppointment = leads.find((d) => d.status === "In Progress") || {
        id: "N/A",
        address: "No upcoming leads",
    };

    // Prepare line chart data (leads count per month)
    const chartData = Array.from({ length: 6 }, (_, i) => {
        const date = new Date();
        date.setMonth(date.getMonth() - (5 - i)); // last 6 months

        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();

        const leadsCount = leads.filter((d) => {
            const dDate = new Date(d.createdAt);
            return dDate.getMonth() === date.getMonth() && dDate.getFullYear() === year;
        }).length;

        return { name: month, leads: leadsCount };
    });

    return (
        <div className="p-6 grid grid-cols-12 gap-6">
            {/* Left Section */}
            <div className="col-span-8 grid grid-cols-2 gap-6">
                {/* Next Appointment */}

                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6 rounded-2xl">
                    <h2 className="font-semibold text-lg">Upcoming Lead</h2>
                    <p className="mt-4">{nextAppointment.address}</p>
                    <p className="text-sm">
                        {customers.find((c) => c.id === nextAppointment.customerId)?.name}
                    </p>
                    <p className="mt-4 text-sm">{nextAppointment.createdAt}</p>
                    <div className="flex justify-between items-center mt-6">
                        <span className="font-bold text-xl">${nextAppointment.value}</span>
                        <button
                            onClick={() => navigate(`/leads/${nextAppointment.id}`)}
                            className="bg-amber-50 text-black px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all"
                        >
                            See Detail
                        </button>
                    </div>
                </div>

                {/* Customers + Leads Count */}
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

                    {/* Leads */}
                    <Link
                        to="/leads"
                        className="group bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow hover:shadow-md transition-all flex flex-col items-center justify-center"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-200 text-blue-700 rounded-full mb-4 group-hover:scale-110 transition">
                            💼
                        </div>
                        <p className="text-gray-600 text-sm">Leads</p>
                        <p className="text-3xl font-bold text-blue-700">{leads.length}</p>
                    </Link>
                </div>

                {/* Recent Leads */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold">Recent Leads</h2>
                        <Link to="/leads" className="text-indigo-600 text-sm hover:underline">
                            See More
                        </Link>
                    </div>
                    <ul className="mt-4 space-y-3">
                        {leads.slice(0, 4).map((lead) => (
                            <li key={lead.id} className="flex justify-between text-sm">
                                <span>{lead.title}</span>
                                <span>${lead.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Leads Trading Graph (Line Chart) */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="font-semibold mb-4">Leads Over Time</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="leads"
                                stroke="#4F46E5"
                                strokeWidth={3}
                                dot={{ r: 4, strokeWidth: 2, fill: "#4F46E5" }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
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
                        {customers.slice(0, 9).map((c) => (
                            <li key={c.id}>
                                <p className="font-medium">{c.name}</p>
                                <p className="text-xs text-gray-500">{c.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
