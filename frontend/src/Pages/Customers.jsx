import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListCustomers from "../components/ListCustomers";
import { useSelector } from "react-redux";
import AddNewModal from "../components/AddNewModal";
import { DataContext } from "../Context/DataContext";
import SearchModal from "../components/SearchModel";

export default function Customers() {
    const customers = useSelector((state) => state.customers.customers);
    const { showSearch, setShowSearch, showModal, setShowModal } = useContext(DataContext);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Topbar title="Customers"
                    onAddNew={() => setShowModal(true)}
                    onSearchClick={() => setShowSearch(true)}
                />

                <div className="h-screen overflow-hidden">
                    <ListCustomers />
                </div>
                {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
                {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
            </div>
        </div>

    );
}
