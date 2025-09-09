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

export default function Dashboard() {
    // Customers array
    const customers = [
        { id: 1, name: "Deanna Annis", email: "deannaannis@gmail.com" },
        { id: 2, name: "Andrea Willis", email: "andreawillis@gmail.com" },
        { id: 3, name: "Brent Rodrigues", email: "brodrigues@gmail.com" },
    ];

    // Deals array
    const deals = [
        {
            id: 101,
            customerId: 1,
            address: "319 Haul Road",
            status: "In Progress",
            price: 5750,
            date: "Nov 18 2021, 17:00",
            area: "100 m²",
            people: 10,
        },
        {
            id: 102,
            customerId: 2,
            address: "47 Spruce Drive",
            status: "Closed",
            price: 5750,
            date: "Nov 15 2021, 08:00",
            area: "120 m²",
            people: 8,
        },
        {
            id: 103,
            customerId: 3,
            address: "165 Belmont Drive",
            status: "In Progress",
            price: 5750,
            date: "Nov 16 2021, 09:30",
            area: "95 m²",
            people: 5,
        },
        {
            id: 104,
            customerId: 1,
            address: "1538 Hammer Road",
            status: "Closed",
            price: 5750,
            date: "Nov 20 2021, 14:00",
            area: "110 m²",
            people: 7,
        },
    ];

    // Calculate overview chart data (deals per month)
    const chartData = [
        { name: "Jan", deals: 2 },
        { name: "Feb", deals: 3 },
        { name: "Mar", deals: 5 },
        { name: "Apr", deals: 2 },
        { name: "May", deals: 4 },
    ];

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
                        <p className="mt-4 text-sm">{nextAppointment.date}</p>
                        <div className="flex justify-between mt-4 text-sm">
                            <span>{nextAppointment.area}</span>
                            <span>{nextAppointment.people} People</span>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <span className="font-bold text-xl">${nextAppointment.price}</span>
                            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg">
                                See Detail
                            </button>
                        </div>
                    </div>
                )}

                {/* Customers + Deals Combined */}
                <div className="bg-white p-6 rounded-2xl shadow-sm grid grid-cols-2 divide-x">
                    <Link
                        to="/customers"
                        className="flex flex-col items-center justify-center hover:bg-gray-50 transition rounded-xl p-2"
                    >
                        <p className="text-gray-500 text-sm">Customers</p>
                        <p className="text-2xl font-bold">{customers.length}</p>
                    </Link>
                    <Link
                        to="/deals"
                        className="flex flex-col items-center justify-center hover:bg-gray-50 transition rounded-xl p-2"
                    >
                        <p className="text-gray-500 text-sm">Deals</p>
                        <p className="text-2xl font-bold">{deals.length}</p>
                    </Link>
                </div>

                {/* Recent Deals */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="font-semibold">Recent Deals</h2>
                    <ul className="mt-4 space-y-3">
                        {deals.slice(0, 4).map((deal) => (
                            <li key={deal.id} className="flex justify-between text-sm">
                                <span>{deal.address}</span> <span>${deal.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Graph / Analytics */}
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
                    <h2 className="font-semibold">Customers</h2>
                    <ul className="mt-4 space-y-3">
                        {customers.map((c) => (
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
