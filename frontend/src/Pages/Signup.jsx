// Signup.jsx
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            await axios.post("http://localhost:3000/api/register", {
                name: `${form.firstName} ${form.lastName}`,
                email: form.email,
                password: form.password,
            }, {
                withCredentials: true, // only needed if you’re using cookies/sessions
            }).then(async () => {
                setSuccess("Account created successfully!");
                const loginRes = await axios.post("http://localhost:3000/api/login", {
                    email: form.email,
                    password: form.password,
                }, {
                    withCredentials: true, // only needed if you’re using cookies/sessions
                });

                const token = loginRes.data.token;
                localStorage.setItem("token", token);
                console.log(token);

                navigate("/dashboard");

                setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
            }).catch((err) => {
                setError(err.response?.data?.message || "Something went wrong");
                console.log(err);
            });


        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="bg-gray-100 flex items-center justify-center p-6">
                    <img src="/loginimage.jpg" alt="Signup" className="max-h-[400px] object-contain" />
                </div>

                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Sign up</h2>
                    <p className="text-gray-500 mb-6">
                        Let’s get you all set up so you can access your personal account.
                    </p>

                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Creating account..." : "Create account"}
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-red-500 hover:underline">
                            Login
                        </a>
                    </p>

                    {/* Google Signup */}
                    <div className="mt-6">
                        <div className="flex items-center">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="mx-3 text-gray-500">Or sign up with</span>
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
            </div>
        </div>
    );
}
