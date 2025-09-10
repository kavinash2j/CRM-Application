import React, { useContext } from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListLead from "../components/ListLead";
import AddNewModal from "../components/AddNewModal";
import { useDispatch, useSelector } from "react-redux";

function Lead() {
    const [showModal, setShowModal] = React.useState(false);
    // const { leads } = useContext(DataContext
    const leads = useSelector((state) => state.leads.leads);

    return (
        <div className="flex bg-gray-50 h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar title="Leads" onAddNew={() => setShowModal(true)} />

                <div className="h-screen overflow-hidden">
                    <ListLead />
                </div>

            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Lead;
