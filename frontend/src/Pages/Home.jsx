import React from "react";
import { useState } from "react";
import AddNewModal from "../components/AddNewModal";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "../components/dashboard";


function Home({ showModal, setShowModal }) {

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar title="Dashboard" onAddNew={() => setShowModal(true)} />
                <Dashboard />
            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Home;