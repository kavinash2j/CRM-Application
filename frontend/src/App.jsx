import Home from "./Pages/home";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import Deal from "./Pages/Deal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import DealDetails from "./Pages/DealDetails";
import Customers from "./Pages/Customers";
import CustomerDetails from "./Pages/CustomerDeatils";

export default function App() {
  let ref = useRef(null);
  // const customers = [
  //   {
  //     id: 1,
  //     name: "Deanna Annis",
  //     email: "deannannis@gmail.com",
  //     phone: "999-999-9999",
  //     address: "475 Spruce Drive, Pittsburgh, PA 23592",
  //     avatar: "https://i.pravatar.cc/100?img=1",
  //   },
  //   {
  //     id: 2,
  //     name: "George Gamble",
  //     email: "goergegamble@gmail.com",
  //     phone: "999-999-9999",
  //     address: "2213 Thorn Street, Glenrock, WY 12345",
  //     avatar: "https://i.pravatar.cc/100?img=2",
  //   },
  // ];


  const customers = [
    {
      id: 1,
      name: "Deanna Annis",
      email: "deannannis@gmail.com",
      phone: "999-999-9999",
      address: "475 Spruce Drive, Pittsburgh, PA 23592",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "George Gamble",
      email: "goergegamble@gmail.com",
      phone: "999-999-9999",
      address: "2213 Thorn Street, Glenrock, WY 12345",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Andrea Willis",
      email: "andreawillis@gmail.com",
      phone: "999-999-9999",
      address: "1952 Chicago Avenue, Fresno, CA 93711",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];
  const deals = [
    { id: 101, customerId: 1, address: "2893 Austin Secret Lane", status: "In Progress", price: "$6000" },
    { id: 102, customerId: 1, address: "4409 Haul Road", status: "Closed", price: "$5000" },
    { id: 103, customerId: 2, address: "579 Godfrey Street", status: "In Progress", price: "$4000" },
  ];
  // const deals = [
  //   {
  //     id: 1,
  //     address: "475 Spruce Drive, Pittsburgh, PA 23592",
  //     area: "100M²",
  //     date: "Nov 14, 2021 07:00 AM",
  //     price: "$6000",
  //     status: "IN PROGRESS",
  //   },
  //   {
  //     id: 2,
  //     address: "1952 Chicago Avenue, Fresno, CA 93711",
  //     area: "100M²",
  //     date: "Nov 15, 2021 08:00 AM",
  //     price: "$6000",
  //     status: "CLOSED",
  //   },
  //   {
  //     id: 3,
  //     address: "4409 Haul Road, Saint Paul, MN 55102",
  //     area: "100M²",
  //     date: "Nov 16, 2021 09:00 AM",
  //     price: "$6000",
  //     status: "IN PROGRESS",
  //   },
  //   {
  //     id: 4,
  //     address: "579 Godfrey Street, Monitor, OR 97071",
  //     area: "100M²",
  //     date: "Nov 17, 2021 10:00 AM",
  //     price: "$6000",
  //     status: "CLOSED",
  //   },
  //   {
  //     id: 5,
  //     address: "2705 Cantebury Drive, New York, NY 10011",
  //     area: "100M²",
  //     date: "Nov 20, 2021 07:00 AM",
  //     price: "$6000",
  //     status: "IN PROGRESS",
  //   },
  // ];
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/deals" element={<Deal deals={deals} />} />
      <Route path="/deals/:id" element={<DealDetails />} />
      <Route path="/customers" element={<Customers customers={customers} />} />
      <Route path="/customer/:id" element={<CustomerDetails customers={customers} deals={deals} />} />
    </Routes>
  );
}