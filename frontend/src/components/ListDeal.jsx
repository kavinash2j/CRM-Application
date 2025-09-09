import { useNavigate } from "react-router-dom";



export default function ListPage({ deals }) {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col">
                <div className="p-6 overflow-y-auto">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <div className="flex justify-between mb-4">
                            <p className="text-sm font-medium">Total: {deals.length} deals</p>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
                                    Sort by: Date Created
                                </button>
                                <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
                                    Filter
                                </button>
                            </div>
                        </div>

                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm border-b">
                                    <th className="p-3">Address</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deals.map((deal) => (
                                    <tr
                                        key={deal.id}
                                        className="hover:bg-gray-50 cursor-pointer border-b"
                                        onClick={() => navigate(`/deals/${deal.id}`)}
                                    >
                                        <td className="p-3">{deal.address}</td>
                                        <td className="p-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${deal.status === "In Progress"
                                                    ? "bg-indigo-100 text-indigo-700"
                                                    : "bg-gray-200 text-gray-700"
                                                    }`}
                                            >
                                                {deal.status}
                                            </span>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex justify-center mt-4">
                            <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
