import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/lead`;

//  Fetch all leads
export const fetchLeads = createAsyncThunk("leads/fetchAll", async (_, { rejectWithValue }) => {
    try {
        // console.log("this runnign the fetchAll");
        const res = await axios.get(`${API_URL}/profile`, { withCredentials: true });

        if (res.status === 200) {
            return res.data;
        } else {
            return rejectWithValue(res.data?.message || "Failed to fetch leads");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to fetch leads");
    }
});

//  Create a new lead
export const createLead = createAsyncThunk("leads/create", async (leadData, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${API_URL}/new`, leadData, { withCredentials: true });

        if (res.status === 201 || res.status === 200) {
            return res.data.lead;
        } else {
            return rejectWithValue(res.data?.message || "Failed to create lead");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to create lead");
    }
});

//  Update an existing lead
export const updateLead = createAsyncThunk("leads/update", async ({ _id, leadData }, { rejectWithValue }) => {
    try {
        const res = await axios.put(`${API_URL}/${_id}`, leadData, { withCredentials: true });

        if (res.status === 200) {
            return res.data.lead;
        } else {
            return rejectWithValue(res.data?.message || "Failed to update lead");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to update lead");
    }
});

//  Delete a lead
export const deleteLead = createAsyncThunk("leads/delete", async (_id, { rejectWithValue }) => {
    try {
        const res = await axios.delete(`${API_URL}/${_id}`, { withCredentials: true });

        if (res.status === 200) {
            return _id;
        } else {
            return rejectWithValue(res.data?.message || "Failed to delete lead");
        }
    } catch (err) {
        return rejectWithValue(err.response?.data || "Failed to delete lead");
    }
});
