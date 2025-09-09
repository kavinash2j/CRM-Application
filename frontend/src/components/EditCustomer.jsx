import React from "react";

export default function EditCustomer({ customer, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Edit Customer</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            defaultValue={customer.name}
                            className="w-full border rounded-lg p-2 mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            defaultValue={customer.email}
                            className="w-full border rounded-lg p-2 mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Phone</label>
                        <input
                            type="text"
                            defaultValue={customer.phone}
                            className="w-full border rounded-lg p-2 mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Address</label>
                        <textarea
                            defaultValue={customer.address}
                            rows="3"
                            className="w-full border rounded-lg p-2 mt-1"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
