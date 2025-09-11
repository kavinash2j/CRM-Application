import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/lead`;

// 🔹 Fetch all leads
export const fetchLeads = createAsyncThunk("leads/fetchAll", async (_, { rejectWithValue }) => {
    try {

        const res = await axios.get(`${API_URL}/all`, { withCredentials: true });

        return res.data;

    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to fetch leads");
    }
});

// 🔹 Create a new lead
export const createLead = createAsyncThunk("leads/create", async (leadData, { rejectWithValue }) => {
    try {

        const res = await axios.post(`${API_URL}/new`, leadData, { withCredentials: true });

        return res.data.lead;

    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to create lead");
    }
});

// 🔹 Update an existing lead
export const editLead = createAsyncThunk(
    "leads/update",
    async ({ id, leadData }, { rejectWithValue }) => {
        try {

            const res = await axios.put(`${API_URL}/${id}`, leadData, { withCredentials: true });

            return res.data.lead;

        } catch (err) {
            return rejectWithValue(err.response?.data || "Failed to update lead");
        }
    }
);

// 🔹 Delete a lead
export const removeLead = createAsyncThunk("leads/delete", async (id, { rejectWithValue }) => {
    try {

        await axios.delete(`${API_URL}/${id}`, { withCredentials: true });

        return id;

    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to delete lead");
    }
});
