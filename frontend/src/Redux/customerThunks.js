import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/customer`;
console.log(API_URL);

// 🔹 Fetch all customers
export const fetchCustomers = createAsyncThunk("customers/fetchAll", async (_, { rejectWithValue }) => {
    try {

        const res = await axios.get(`${API_URL}/all`, { withCredentials: true });

        return res.data;

    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to fetch customers");
    }
});

// 🔹 Create a new customer
export const createCustomer = createAsyncThunk("customers/create", async (customerData, { rejectWithValue }) => {
    try {

        const res = await axios.post(`${API_URL}/new`, customerData, { withCredentials: true });

        return res.data.customer;

    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to create customer");
    }
});

// 🔹 Update existing customer
export const editCustomer = createAsyncThunk(
    "customers/update",
    async ({ id, customerData }, { rejectWithValue }) => {
        try {

            const res = await axios.put(`${API_URL}/${id}`, customerData, { withCredentials: true });

            return res.data.customer;

        } catch (err) {
            return rejectWithValue(err.response?.data || "Failed to update customer");
        }
    }
);

// 🔹 Delete customer
export const removeCustomer = createAsyncThunk("customers/delete", async (id, { rejectWithValue }) => {
    try {

        await axios.delete(`${API_URL}/${id}`, { withCredentials: true });

        return id;

    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to delete customer");
    }
});
