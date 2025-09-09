import React from "react";
import { Home, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="group h-screen">
            <div className="w-20 group-hover:w-56 h-full bg-white shadow-lg flex flex-col py-6 px-4 transition-all duration-300">
                {/* Logo */}
                <div className="mb-10 flex items-center w-full overflow-hidden">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold">
                        E
                    </div>
                    {/* Smooth text reveal */}
                    <span
                        className="ml-3 font-bold text-indigo-600 text-lg 
            opacity-0 translate-x-[-10px] 
            group-hover:opacity-100 group-hover:translate-x-0 
            transition-all duration-300 whitespace-nowrap"
                    >
                        Enterprise
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-6 text-gray-500 w-full">
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-3 hover:text-indigo-600 overflow-hidden"
                    >
                        <Home className="w-6 h-6 flex-shrink-0" />
                        <span
                            className="opacity-0 translate-x-[-10px] 
              group-hover:opacity-100 group-hover:translate-x-0 
              transition-all duration-300 whitespace-nowrap"
                        >
                            Dashboard
                        </span>
                    </Link>

                    <Link
                        to="/deals"
                        className="flex items-center gap-3 hover:text-indigo-600 overflow-hidden"
                    >
                        <Briefcase className="w-6 h-6 flex-shrink-0" />
                        <span
                            className="opacity-0 translate-x-[-10px] 
              group-hover:opacity-100 group-hover:translate-x-0 
              transition-all duration-300 whitespace-nowrap"
                        >
                            Deals
                        </span>
                    </Link>

                    <Link
                        to="/customers"
                        className="flex items-center gap-3 hover:text-indigo-600 overflow-hidden"
                    >
                        <Users className="w-6 h-6 flex-shrink-0" />
                        <span
                            className="opacity-0 translate-x-[-10px] 
              group-hover:opacity-100 group-hover:translate-x-0 
              transition-all duration-300 whitespace-nowrap"
                        >
                            Customers
                        </span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
