import React from "react";

export default function EditDeal({ deal, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center 
                        backdrop-blur-md bg-black/30 z-50">
            <div
                className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative 
                           max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>

                <h2 className="text-lg font-semibold mb-4">Edit Deal</h2>

                <form className="space-y-4">
                    {/* Room Images */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Room Images</label>
                        <input type="file" className="w-full border rounded-lg p-2 text-sm" />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Address</label>
                        <input
                            type="text"
                            placeholder="Street Address"
                            className="w-full border rounded-lg p-2 text-sm mb-2"
                            defaultValue={deal?.address || ""}
                        />
                        <div className="grid grid-cols-3 gap-2">
                            <input
                                type="text"
                                placeholder="City"
                                className="border rounded-lg p-2 text-sm"
                            />
                            <input
                                type="text"
                                placeholder="State / Province"
                                className="border rounded-lg p-2 text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Zip Code"
                                className="border rounded-lg p-2 text-sm"
                            />
                        </div>
                    </div>

                    {/* Room Area & People */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium block mb-1">Room Area (m²)</label>
                            <input
                                type="number"
                                defaultValue={deal?.area?.replace("M²", "")}
                                className="w-full border rounded-lg p-2 text-sm"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1"># of People</label>
                            <input
                                type="number"
                                defaultValue={deal?.people}
                                className="w-full border rounded-lg p-2 text-sm"
                            />
                        </div>
                    </div>

                    {/* Appointment Date */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Appointment Date</label>
                        <input
                            type="datetime-local"
                            className="w-full border rounded-lg p-2 text-sm"
                        />
                    </div>

                    {/* Special Instructions */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Special Instructions</label>
                        <input
                            type="text"
                            placeholder="Leave special instructions"
                            defaultValue={deal?.instructions}
                            className="w-full border rounded-lg p-2 text-sm"
                        />
                    </div>

                    {/* Room Access & Price */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium block mb-1">Room Access</label>
                            <select
                                defaultValue={deal?.access}
                                className="w-full border rounded-lg p-2 text-sm"
                            >
                                <option>Keys with doorman</option>
                                <option>Keycard</option>
                                <option>Open Access</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Price ($)</label>
                            <input
                                type="number"
                                defaultValue={deal?.price?.replace("$", "")}
                                className="w-full border rounded-lg p-2 text-sm"
                            />
                        </div>
                    </div>

                    {/* Progress */}
                    <div>
                        <label className="text-sm font-medium block mb-1">Progress</label>
                        <select
                            defaultValue={deal?.progress}
                            className="w-full border rounded-lg p-2 text-sm"
                        >
                            <option>In Progress</option>
                            <option>Closed</option>
                            <option>Pending</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 mt-4"
                    >
                        Done
                    </button>
                </form>
            </div>
        </div>
    );
}
