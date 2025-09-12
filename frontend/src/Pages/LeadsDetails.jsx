// src/pages/leads/LeadDetailsPage.jsx
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LeadPage from "../components/LeadPage";
import AddNewModal from "../components/AddNewModal";
import { DataContext } from "../Context/DataContext";
import SearchModal from "../components/SearchModel";

export default function LeadDetails() {
    const { showSearch, setShowSearch, showModal, setShowModal } = useContext(DataContext);
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Topbar title="Lead Details"
                    onAddNew={() => setShowModal(true)}
                    onSearchClick={() => setShowSearch(true)}
                />
                <LeadPage showModal={showModal} setShowModal={setShowModal} />
            </div>
            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
            {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
        </div>
    );
}
