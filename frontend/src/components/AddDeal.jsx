import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AddDeal({ onClose, setStep, customers = [] }) {
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const [formData, setFormData] = useState({
        address: "",
        city: "",
        state: "",
        zip: "",
        roomArea: "",
        people: "",
        appointmentDate: "",
        instructions: "",
        roomAccess: "Keys with doorman",
        price: "",
        progress: "In Progress",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Deal:", { customer: selectedCustomer, ...formData });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            {/* 🔹 Responsive, scrollable modal */}
            <div className="bg-white rounded-2xl w-[95%] sm:w-full max-w-lg mx-auto shadow-xl
                      max-h-[85vh] flex flex-col">

                {/* Header (fixed at top inside modal) */}
                <div className="p-4 sm:p-6 border-b sticky top-0 bg-white z-10 rounded-t-2xl">
                    <h2 className="text-lg sm:text-xl font-semibold">Add New Deal</h2>
                </div>

                {/* Body (scrollable part) */}
                <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
                    {/* 🔹 Customer Slider */}
                    <div>
                        {customers.length > 0 ? (
                            <Swiper
                                spaceBetween={12}
                                slidesPerView={2.2}
                                breakpoints={{
                                    640: { slidesPerView: 3.2 },
                                    1024: { slidesPerView: 4.2 },
                                }}
                            >
                                {customers.map((customer) => (
                                    <SwiperSlide key={customer.id}>
                                        <div
                                            onClick={() => setSelectedCustomer(customer)}
                                            className={`p-3 sm:p-4 border rounded-xl cursor-pointer flex flex-col items-center transition-all ${selectedCustomer?.id === customer.id
                                                ? "border-indigo-500 bg-indigo-50"
                                                : "border-gray-200"
                                                }`}
                                        >
                                            <img
                                                src={customer.avatar}
                                                alt={customer.name}
                                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 object-cover"
                                            />
                                            <span className="font-medium text-xs sm:text-sm text-center">
                                                {customer.name}
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <p className="text-gray-500 text-sm">No customers available</p>
                        )}
                    </div>

                    {/* 🔹 Deal Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                                placeholder="Street Address"
                                required
                            />
                        </div>

                        {/* City / State / Zip */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2"
                                placeholder="City"
                                required
                            />
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2"
                                placeholder="State / Province"
                                required
                            />
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2"
                                placeholder="Zip Code"
                                required
                            />
                        </div>

                        {/* Room details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                                type="number"
                                name="roomArea"
                                value={formData.roomArea}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2"
                                placeholder="Room Area (m²)"
                            />
                            <input
                                type="number"
                                name="people"
                                value={formData.people}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2"
                                placeholder="# of People"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium">Appointment Date</label>
                            <input
                                type="date"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        {/* Instructions */}
                        <div>
                            <label className="block text-sm font-medium">Special Instructions</label>
                            <textarea
                                name="instructions"
                                value={formData.instructions}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                                rows={3}
                            />
                        </div>

                        {/* Room Access + Price */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <select
                                name="roomAccess"
                                value={formData.roomAccess}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2"
                            >
                                <option>Keys with doorman</option>
                                <option>Owner available</option>
                                <option>Other</option>
                            </select>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2"
                                placeholder="Price ($)"
                            />
                        </div>

                        {/* Progress */}
                        <div>
                            <label className="block text-sm font-medium">Progress</label>
                            <select
                                name="progress"
                                value={formData.progress}
                                onChange={handleChange}
                                className="mt-1 w-full border rounded-lg px-3 py-2"
                            >
                                <option>In Progress</option>
                                <option>Completed</option>
                                <option>Pending</option>
                            </select>
                        </div>
                    </form>
                </div>

                {/* Footer (fixed at bottom inside modal) */}
                <div className="p-4 sm:p-6 border-t flex flex-col sm:flex-row justify-between gap-3 sticky bottom-0 bg-white z-10 rounded-b-2xl">
                    <button
                        type="button"
                        onClick={() => setStep("choose")}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 w-full sm:w-auto"
                    >
                        Back
                    </button>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 w-full sm:w-auto"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={!selectedCustomer}
                            className={`px-4 py-2 rounded-lg text-white w-full sm:w-auto ${selectedCustomer
                                ? "bg-indigo-600 hover:bg-indigo-700"
                                : "bg-gray-300 cursor-not-allowed"
                                }`}
                        >
                            Save Deal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
