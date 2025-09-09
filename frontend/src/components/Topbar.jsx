import React from "react";
import { Plus, Search } from "lucide-react";

export default function Topbar({ title, onAddNew }) {
    return (
        <div className="flex justify-between items-center bg-white p-4 shadow-sm">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="flex items-center gap-4">
                <button
                    onClick={onAddNew}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
                >
                    <Plus size={18} /> Add New
                </button>
                <Search className="text-gray-500 cursor-pointer" />

            </div>
        </div>
    );
}
