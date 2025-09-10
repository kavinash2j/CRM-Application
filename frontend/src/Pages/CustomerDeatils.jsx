import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AddNewModal from "../components/AddNewModal";
import { CustomerPage } from "../components/CustomerPage.jsx"

export default function CustomerDetails({ showModal, setShowModal }) {
    return (
        <div className="flex h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">

                <Topbar title="Customer Details" onAddNew={() => setShowModal(true)} />

                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                    <CustomerPage />
                </div>
            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
        </div>
    );
}