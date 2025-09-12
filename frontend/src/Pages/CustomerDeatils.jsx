import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AddNewModal from "../components/AddNewModal";
import { CustomerPage } from "../components/CustomerPage.jsx"
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import SearchModal from "../components/SearchModel.jsx";

export default function CustomerDetails({ showModal, setShowModal }) {
    const { showSearch, setShowSearch, showModal, setShowModal } = useContext(DataContext);
    return (
        <div className="flex h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">

                <Topbar title="Customer Details"
                    onAddNew={() => setShowModal(true)}
                    onSearchClick={() => setShowSearch(true)}
                />

                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                    <CustomerPage />
                </div>
            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
            {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}

        </div>
    );
}