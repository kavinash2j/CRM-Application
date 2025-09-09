import React from "react";
import { useState } from "react";
import AddNewModal from "../components/AddNewModal";
import Sidebar from "../components/sidebar";
import Topbar from "../components/toPBAR";
import Dashboard from "../components/Dashboard";

function Home({ customers, deals }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar title="Dashboard" onAddNew={() => setShowModal(true)} />
                <Dashboard customers={customers} deals={deals} />
            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Home;