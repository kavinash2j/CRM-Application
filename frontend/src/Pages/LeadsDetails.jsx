// src/pages/leads/LeadDetailsPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LeadPage from "../components/LeadPage";

export default function LeadDetails() {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Topbar title="Lead Details" onAddNew={() => setShowModal(true)} />
                <LeadPage leadId={id} showModal={showModal} setShowModal={setShowModal} />
            </div>
        </div>
    );
}
