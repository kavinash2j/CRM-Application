import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../Redux/customerThunks";
import { fetchLeads } from "../Redux/leadThunks";
import { login } from "../Redux/DataRedux";

export default function UserProtected({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuth = async () => {
            try {

                let token = localStorage.getItem("token");
                // console.log("token ", token);
                if (token) {
                    const headers = { Authorization: `Bearer ${token}` };
                    // console.log(headers);
                    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile`, {
                        headers,
                        withCredentials: true,
                    });
                    dispatch(login(res.data));
                    // console.log("response from profile", res);

                    if (res.status === 200) {
                        setIsAuthenticated(true);

                        dispatch(fetchCustomers());
                        dispatch(fetchLeads());

                    } else {
                        setIsAuthenticated(false);
                    }
                }

            } catch (err) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div className="text-center p-10">Checking authentication...</div>;
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
}
