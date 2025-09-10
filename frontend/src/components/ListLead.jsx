import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Filter, ChevronDown, Loader2 } from "lucide-react";

export default function ListPage() {
    const navigate = useNavigate();
    const leads = useSelector((state) => state.leads.leads);

    return (
        <div className="flex h-screen bg-gray-50 overflow-y-auto ">
            {/* Main Content */}
            <div className="flex-1 flex flex-col ">
                {/* Scrollable area */}
                <div className="flex-1 p-8 ">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-700 text-sm font-semibold">
                                Total: <span className="text-indigo-600">{leads.length}</span> leads
                            </p>

                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-all">
                                    <ChevronDown size={16} />
                                    Sort: Date Created
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-all">
                                    <Filter size={16} />
                                    Filter
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 text-left text-gray-600 border-b">
                                        <th className="p-4 font-medium">Project Title</th>
                                        <th className="p-4 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map((lead, idx) => (
                                        <tr
                                            key={lead.id}
                                            className={`cursor-pointer transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                                } hover:bg-indigo-50`}
                                            onClick={() => navigate(`/leads/${lead.id}`)}
                                        >
                                            <td className="p-4 text-gray-700">{lead.title}</td>
                                            <td className="p-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${lead.status === "In Progress"
                                                        ? "bg-indigo-100 text-indigo-700"
                                                        : lead.status === "Completed"
                                                            ? "bg-green-100 text-green-700"
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
                        </div>

                        {/* Footer */}
                        <div className="flex justify-center mt-6">
                            <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm">
                                <Loader2 size={16} className="animate-spin" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
