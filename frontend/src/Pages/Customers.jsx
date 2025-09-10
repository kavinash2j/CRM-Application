import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListCustomers from "../components/ListCustomers";
import { useSelector } from "react-redux";
import AddNewModal from "../components/AddNewModal";

export default function Customers({ showModal, setShowModal }) {
    const customers = useSelector((state) => state.customers.customers);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Topbar title="Customers" onAddNew={() => setShowModal(true)} />

                <div className="h-screen overflow-hidden">
                    <ListCustomers />
                </div>
                {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
            </div>
        </div>

    );
}
