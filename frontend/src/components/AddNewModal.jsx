import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";

// 👉 you’ll create these files yourself
import AddCustomer from "./AddCustomer";
import AddLead from "./AddLead";

export default function AddNewModal({ onClose }) {
    const [step, setStep] = useState("choose"); // "choose" | "form"
    const [type, setType] = useState(null); // "lead" | "customer"

    const customers = useSelector((state) => state.customers.customers);

    const handleLeadClick = () => {
        if (customers.length === 0) {
            alert("⚠️ You must add at least one customer before creating a lead.");
            return;
        }
        setType("lead");
        setStep("form");
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Choose Step */}
                {step === "choose" && (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl p-6 w-80 shadow-xl"
                    >
                        <h2 className="text-lg font-semibold mb-4">Add New</h2>
                        <div className="space-y-3">
                            {/* Lead button → only if customers exist */}
                            <button
                                onClick={handleLeadClick}
                                className={`flex justify-between items-center w-full px-4 py-3 border rounded-lg transition 
                                    ${customers.length === 0
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-gray-50"
                                    }`}
                                disabled={customers.length === 0}
                            >
                                <span className="font-medium">Lead</span>
                                <ArrowRight className="w-5 h-5 text-gray-500" />
                            </button>

                            {/* Customer button */}
                            <button
                                onClick={() => {
                                    setType("customer");
                                    setStep("form");
                                }}
                                className="flex justify-between items-center w-full px-4 py-3 border rounded-lg hover:bg-gray-50"
                            >
                                <span className="font-medium">Customer</span>
                                <ArrowRight className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Form Step → load component */}
                {step === "form" && (
                    <>
                        {type === "customer" ? (
                            <AddCustomer onClose={onClose} setStep={setStep} />
                        ) : (
                            <AddLead onClose={onClose} setStep={setStep} />
                        )}
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
