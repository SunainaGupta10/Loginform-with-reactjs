import React from "react";

const SignUpForm = () => {
    return(
        <form>
            <div className="mb-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <input type="password" placeholder="Password" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Sign Up
            </button>
        </form>
    )
}

export default SignUpForm;