import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/customer`;

// 🔹 Fetch all customers
export const fetchCustomers = createAsyncThunk("customers/fetchAll", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${API_URL}/profile`, { withCredentials: true });

        if (res.status === 200) {
            return res.data;
        } else {
            return rejectWithValue(res.data?.message || "Failed to fetch customers");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to fetch customers");
    }
});

// 🔹 Create a new customer
export const createCustomer = createAsyncThunk("customers/create", async (customerData, { rejectWithValue }) => {
    try {

        const res = await axios.post(`${API_URL}/new`, customerData, { withCredentials: true });

        if (res.status === 201 || res.status === 200) {
            return res.data.customer;
        } else {
            return rejectWithValue(res.data?.message || "Failed to create customer");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to create customer");
    }
});

// 🔹 Update existing customer
export const updateCustomer = createAsyncThunk("customers/update", async ({ _id, customerData }, { rejectWithValue }) => {
    try {
        const res = await axios.put(`${API_URL}/${_id}`, customerData, { withCredentials: true });

        if (res.status === 200) {
            return res.data.customer;
        } else {
            return rejectWithValue(res.data?.message || "Failed to update customer");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to update customer");
    }
});

// 🔹 Delete customer
export const deleteCustomer = createAsyncThunk("customers/delete", async (_id, { rejectWithValue }) => {
    try {
        const res = await axios.delete(`${API_URL}/${_id}`, { withCredentials: true });

        if (res.status === 200) {
            return _id;
        } else {
            return rejectWithValue(res.data?.message || "Failed to delete customer");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to delete customer");
    }
});
