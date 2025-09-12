import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Filter, ChevronDown, Loader2, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ListPage() {
    const navigate = useNavigate();
    const leads = useSelector((state) => state.leads.leads);
    const [loading, setLoading] = useState(false);

    // Filter state
    const [statusFilter, setStatusFilter] = useState("All");
    const [filterOpen, setFilterOpen] = useState(false);
    const filterRef = useRef(null);

    // Close filter dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setFilterOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filtered leads
    const filteredLeads =
        statusFilter === "All"
            ? leads
            : leads.filter((lead) => lead.status === statusFilter);

    const statuses = ["All", "New", "Contacted", "Converted", "Lost"];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Scrollable area */}
                <div className="flex-1 p-8 overflow-y-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 min-h-full">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-700 text-sm font-semibold">
                                Total:{" "}
                                <span className="text-indigo-600">
                                    {filteredLeads.length}
                                </span>{" "}
                                leads
                            </p>

                            <div className="flex gap-3 items-center">


                                {/* Filter Dropdown */}
                                <div className="relative" ref={filterRef}>
                                    <button
                                        onClick={() => setFilterOpen(!filterOpen)}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-all"
                                    >
                                        <Filter size={16} />
                                        {statusFilter === "All" ? "Filter" : `Filter: ${statusFilter}`}
                                        {statusFilter !== "All" && (
                                            <X
                                                size={14}
                                                className="ml-1 text-gray-400 hover:text-gray-600"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setStatusFilter("All");
                                                }}
                                            />
                                        )}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {filterOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                                            {statuses.map((status) => (
                                                <button
                                                    key={status}
                                                    onClick={() => {
                                                        setStatusFilter(status);
                                                        setFilterOpen(false);
                                                    }}
                                                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                                                        ${statusFilter === status
                                                            ? "bg-indigo-100 text-indigo-700 font-medium"
                                                            : "hover:bg-gray-100 text-gray-700"
                                                        }`}
                                                >
                                                    {status}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        {loading ? (
                            <div className="flex justify-center py-10">
                                <Loader2
                                    size={32}
                                    className="animate-spin text-indigo-600"
                                />
                            </div>
                        ) : filteredLeads.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <p className="text-gray-500 mb-4">
                                    No leads available
                                </p>
                            </div>
                        ) : (
                            <div className="overflow-hidden rounded-xl border border-gray-200">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-50 text-left text-gray-600 border-b">
                                            <th className="p-4 font-medium">Project Title</th>
                                            <th className="p-4 font-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredLeads.map((lead, idx) => (
                                            <tr
                                                key={lead._id}
                                                className={`cursor-pointer transition-colors ${idx % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-gray-50"
                                                    } hover:bg-indigo-50`}
                                                onClick={() =>
                                                    navigate(`/leads/${lead._id}`)
                                                }
                                            >
                                                <td className="p-4 text-gray-700">{lead.title}</td>
                                                <td className="p-4">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-medium ${lead.status === "In Progress"
                                                            ? "bg-indigo-100 text-indigo-700"
                                                            : lead.status === "Completed"
                                                                ? "bg-green-100 text-green-700"
                                                                : lead.status === "New"
                                                                    ? "bg-blue-100 text-blue-700"
                                                                    : lead.status === "Contacted"
                                                                        ? "bg-yellow-100 text-yellow-700"
                                                                        : lead.status === "Converted"
                                                                            ? "bg-green-200 text-green-800"
                                                                            : lead.status === "Lost"
                                                                                ? "bg-red-100 text-red-700"
                                                                                : "bg-gray-200 text-gray-700"
                                                            }`}
                                                    >
                                                        {lead.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="h-8"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
