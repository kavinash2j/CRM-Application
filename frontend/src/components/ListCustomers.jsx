import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ListCustomers() {
    const navigate = useNavigate();
    const customers = useSelector((state) => state.customers.customers);

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center px-2 py-4 border-b">
                <p className="text-gray-700 text-sm font-semibold">
                    Total: <span className="text-indigo-600">{customers.length}</span> customers
                </p>
                <div className="flex gap-3">


                </div>
            </div>

            {/* Internal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4">
                {customers.length === 0 ? (
                    // ✅ Empty State
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <p className="text-gray-500 mb-4 text-lg">No customers added yet</p>

                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customers.map((customer) => (
                            <div
                                key={customer._id}
                                onClick={() => navigate(`/customer/${customer._id}`)}
                                className="cursor-pointer bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-200 flex flex-col"
                            >
                                {/* Avatar + Name */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={
                                            customer.avatar ||
                                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                        }
                                        alt={customer.name}
                                        className="w-12 h-12 rounded-full object-cover border"
                                    />
                                    <div>
                                        <h3 className="text-gray-800 font-semibold text-lg">
                                            {customer.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{customer.email}</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <p className="mt-4 text-gray-600 text-sm">📞 {customer.phone}</p>

                                {/* Footer with Button */}
                                <div className="mt-5 flex justify-end">
                                    <button
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium"
                                    >
                                        Open
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
