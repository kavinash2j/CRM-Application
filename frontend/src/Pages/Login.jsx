import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const loginRes = await axios.post("http://localhost:3000/api/login", {
                email: form.email,
                password: form.password,
            }, {
                withCredentials: true, // only needed if you’re using cookies/sessions
            });

            const token = loginRes.data.token;
            localStorage.setItem("token", token);

            setSuccess("Login successful! Redirecting...");
            setForm({ email: "", password: "" });


            if (loginRes.status === 200) {
                navigate("/dashboard");
            }

        } catch (err) {
            if (err.response?.status === 401) {
                setError("Incorrect email or password.");
            } else if (err.response?.status === 404) {
                setError("User not found. Please sign up first.");
            } else {
                setError(err.response?.data?.message || "Something went wrong.");
            }
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                {/* Left Section (Form) */}
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Login</h2>
                    <p className="text-gray-500 mb-6">Login to access your account</p>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-600 mb-2">Email</label>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="john.doe@gmail.com"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2">Password</label>
                            <input
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                Remember me
                            </label>
                            <a href="#" className="text-red-500 hover:underline">
                                Forgot Password
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    {/* Error & Success Messages */}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {success && <p className="text-green-600 mt-4">{success}</p>}

                    <p className="text-sm text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-red-500 hover:underline">
                            Sign up
                        </a>
                    </p>

                    {/* Google Login */}
                    <div className="mt-6">
                        <div className="flex items-center">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="mx-3 text-gray-500">Or login with</span>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <button className="mt-6 w-full flex items-center justify-center gap-3 bg-white border rounded-full shadow-lg px-6 py-3 hover:shadow-xl transition">
                            <FcGoogle size={24} />
                            <span className="font-medium text-gray-700">
                                Continue with Google
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="bg-gray-100 flex items-center justify-center p-6">
                    <img
                        src="/loginimage.jpg"
                        alt="Login"
                        className="max-h-[400px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
