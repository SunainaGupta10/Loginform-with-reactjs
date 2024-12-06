import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { motion } from "framer-motion";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center relative"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 blur-lg"></div>

      {/* Card Container */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative z-10 w-full max-w-md bg-white bg-opacity-10 rounded-lg shadow-xl p-8 backdrop-blur-lg"
      >
        <h2 className="text-center text-3xl font-bold text-white mb-6">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>

        {/* Form Switcher */}
        {isSignUp ? <SignUpForm /> : <LoginForm />}

        <p className="text-center text-sm text-gray-400 mt-4">
          {
            isSignUp ? (
                <>
                Already have an account?{" "}
                <button onClick={() => setIsSignUp(false)} className="text-blue-400 hover:underline focus:outline-none">
                    Sign In
                </button>
                </>
            ) : (
                <>
                Don't have an account?{" "}
                <button onClick={() => setIsSignUp(true)} className="text-blue-400 hover:underline focus:outline-none">
                    Sign Up
                </button>
                </>
            )
          }
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AuthPage;
