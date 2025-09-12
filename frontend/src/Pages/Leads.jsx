import React, { useContext } from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListLead from "../components/ListLead";
import AddNewModal from "../components/AddNewModal";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../Context/DataContext";
import SearchModal from "../components/SearchModel.jsx";

function Lead() {
    // const [showModal, setShowModal] = React.useState(false);
    // const { leads } = useContext(DataContext
    const leads = useSelector((state) => state.leads.leads);
    const { showSearch, setShowSearch, showModal, setShowModal } = useContext(DataContext);

    return (
        <div className="flex bg-gray-50 h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar title="Leads"
                    onAddNew={() => setShowModal(true)}
                    onSearchClick={() => setShowSearch(true)}
                />

                <div className="h-screen overflow-hidden">
                    <ListLead />
                </div>

            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
            {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
        </div>
    );
}

export default Lead;
