import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function UserProtected({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {

                let token = localStorage.getItem("token");
                console.log(token);

                const headers = token ? { Authorization: `Bearer ${token}` } : {};

                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile`, {
                    headers,
                }, {
                    withCredentials: true,
                });
                console.log(res);
                if (res.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
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
