// Signup.jsx
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl flex overflow-hidden">
                {/* Left Section (Image) */}
                <div className="flex-1 bg-gray-100 flex items-center justify-center p-6">
                    <img src="/signup-image.png" alt="Signup" className="max-h-96" />
                </div>

                {/* Right Section */}
                <div className="flex-1 p-10 flex flex-col justify-center">
                    <img src="/your-logo.png" alt="Logo" className="h-10 mb-8" />

                    <h2 className="text-3xl font-bold mb-2">Sign up</h2>
                    <p className="text-gray-500 mb-6">
                        Let’s get you all set up so you can access your personal account.
                    </p>

                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="w-4 h-4" />
                            I agree to all the{" "}
                            <a href="#" className="text-red-500 hover:underline">
                                Terms
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-red-500 hover:underline">
                                Privacy Policies
                            </a>
                        </label>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                            Create account
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
