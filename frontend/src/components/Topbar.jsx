// components/Topbar.jsx
import React from "react";
import { Plus, Search } from "lucide-react";

export default function Topbar({ title, onAddNew, onSearchClick }) {
    return (
        <div className="flex justify-between items-center bg-white/90 backdrop-blur-md px-8 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                {title}
            </h1>

            <div className="flex items-center gap-4">
                {/* Search Button */}
                <button
                    onClick={onSearchClick}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white
                     hover:border-indigo-300 hover:text-indigo-600 
                     hover:shadow-md transition-all duration-200
                     flex items-center justify-center"
                >
                    <Search size={18} />
                </button>

                {/* Add New Button */}
                <button
                    onClick={onAddNew}
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 
                     hover:from-indigo-700 hover:to-indigo-800 
                     text-white px-5 py-2.5 rounded-xl text-sm font-medium 
                     shadow-md hover:shadow-lg transition-all duration-200"
                >
                    <Plus size={18} className="shrink-0" />
                    Add New
                </button>
            </div>
        </div>
    );
}
