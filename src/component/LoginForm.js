import React from "react";

const LoginForm = () =>{
    return(
        <form>
            <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <input type="password" placeholder="password" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm;