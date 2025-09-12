// src/pages/leads/LeadDetailsPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LeadPage from "../components/LeadPage";
import AddNewModal from "../components/AddNewModal";

export default function LeadDetails({ showModal, setShowModal }) {

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Topbar title="Lead Details" onAddNew={() => setShowModal(true)} />
                <LeadPage showModal={showModal} setShowModal={setShowModal} />
            </div>
            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
        </div>
    );
}
