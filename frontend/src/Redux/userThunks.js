import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token"); // 🔑 get token

            const resp = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/logout`,
                {
                    withCredentials: true, // send cookies if using cookie auth
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token ? `Bearer ${token}` : "", // send token
                    },
                }
            );

            localStorage.removeItem("token");
            console.log("user logout ", resp);
            return resp.data; // return backend response

        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || err.message || "Logout failed"
            );
        }
    }
);
