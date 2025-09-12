import React, { useState } from "react";
import { Home, Users, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Sidebar() {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    const currentUser = useSelector((state) => state.user.currentUser);

    const menuItems = [
        { name: "Dashboard", icon: Home, path: "/dashboard" },
        { name: "Leads", icon: Briefcase, path: "/leads" },
        { name: "Customers", icon: Users, path: "/customers" },
    ];

    return (
        <div className="h-screen">
            <div
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
                className={`${expanded ? "w-60" : "w-20"
                    } h-full bg-gradient-to-b from-indigo-600 to-indigo-800 shadow-xl flex flex-col py-6 px-4 rounded-r-2xl transition-[width] duration-300 ease-in-out`}
            >
                {/* Logo */}
                <div className="mb-10 flex items-center w-full overflow-hidden">
                    <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold shadow-md">
                        E
                    </div>
                    <span
                        className={`ml-3 font-extrabold text-white text-xl whitespace-nowrap transition-all duration-300 ${expanded
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                            }`}
                    >
                        Enterprise
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-4 text-white w-full">
                    {menuItems.map(({ name, icon: Icon, path }) => {
                        const active = location.pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`relative flex items-center gap-3 px-3 py-2 rounded-xl overflow-hidden transition-all duration-300 ${active
                                    ? "bg-white text-indigo-700 shadow-md"
                                    : "hover:bg-indigo-500/30"
                                    }`}
                            >
                                {active && (
                                    <span className="absolute left-0 top-0 w-1 h-full bg-white rounded-r-lg"></span>
                                )}
                                <Icon className="w-6 h-6 flex-shrink-0" />
                                <span
                                    className={`whitespace-nowrap font-medium transition-all duration-300 ${expanded
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-2"
                                        }`}
                                >
                                    {name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-indigo-500/40 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold shadow cursor-pointer hover:scale-105 transition">
                        {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <span
                        className={`text-white text-sm font-medium transition-all duration-300 ${expanded
                            ? "opacity-100 translate-x-0 mt-1"
                            : "opacity-0 -translate-x-2"
                            }`}
                    >
                        {currentUser.name}
                    </span>
                </div>
            </div>
        </div>
    );
}
