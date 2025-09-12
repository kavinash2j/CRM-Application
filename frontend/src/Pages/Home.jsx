import React, { useState } from "react";
import AddNewModal from "../components/AddNewModal";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "../components/Dashboard";
import SearchModal from "../components/SearchModel";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

function Home() {
    const { showSearch, setShowSearch, showModal, setShowModal } = useContext(DataContext);
    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar
                    title="Dashboard"
                    onAddNew={() => setShowModal(true)}
                    onSearchClick={() => setShowSearch(true)}
                />
                <Dashboard />
            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
            {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
        </div>
    );
}

export default Home;
