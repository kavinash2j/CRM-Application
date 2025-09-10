import Home from "./Pages/home";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import Leads from "./Pages/Leads.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import LeadsDetails from "./Pages/LeadsDetails.jsx";
import Customers from "./Pages/Customers";
import CustomerDetails from "./Pages/CustomerDeatils.jsx";
import UserProtected from '../wrapComponents/userProtected.jsx'


export default function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={
        <UserProtected>
          <Home showModal={showModal} setShowModal={setShowModal} />
        </UserProtected>

      } />
      <Route path="/leads" element={
        <UserProtected>
          <Leads showModal={showModal} setShowModal={setShowModal} />
        </UserProtected>

      } />
      <Route path="/leads/:id" element={
        <UserProtected>
          <LeadsDetails showModal={showModal} setShowModal={setShowModal} />
        </UserProtected>

      } />
      <Route path="/customers" element={
        <UserProtected>
          <Customers showModal={showModal} setShowModal={setShowModal} />
        </UserProtected>

      } />
      <Route path="/customer/:id" element={
        <UserProtected>
          <CustomerDetails showModal={showModal} setShowModal={setShowModal} />
        </UserProtected>

      } />
    </Routes>
  );
}