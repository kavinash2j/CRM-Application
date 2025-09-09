import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListCustomers from "../components/ListCustomers";

export default function Customers({ customers }) {

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <Topbar title="Customers" onAddNew={() => alert("Add new customer")} />

                <div className="p-6">
                    <ListCustomers customers={customers} />
                </div>
            </div>
        </div>
    );
}
