import React from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ListDeal from "../components/ListDeal";
import AddNewModal from "../components/AddNewModal";

function Deal({ deals }) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar title="Deals" onAddNew={() => setShowModal(true)} />
                <ListDeal deals={deals} />
            </div>

            {showModal && <AddNewModal onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Deal;
