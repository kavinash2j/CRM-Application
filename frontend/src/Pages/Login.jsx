import { FcGoogle } from "react-icons/fc";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl flex overflow-hidden">
                {/* Left Section */}
                <div className="flex-1 p-10 flex flex-col justify-center">
                    <img src="/your-logo.png" alt="Logo" className="h-10 mb-8" />

                    <h2 className="text-3xl font-bold mb-2">Login</h2>
                    <p className="text-gray-500 mb-6">
                        Login to access your account
                    </p>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-gray-600 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="john.doe@gmail.com"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
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

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </button>
                    </form>

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

                {/* Right Section (Image with reduced height) */}
                <div className="flex-1 bg-gray-100 flex items-center justify-center p-2">
                    <img
                        src="../public/loginimage.jpg"
                        alt="Login"
                        className=" object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
