"use client"
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="flex items-center mt-10 justify-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border text-gray-700 border-green-400 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border text-gray-700 border-green-400 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-3xl hover:bg-green-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-8 text-center flex flex-col gap-3">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          <p className="text-gray-700">Not registered yet?</p>
          <a href="/signup" className="text-sm text-green-500 hover:underline">Create an Account</a>

        </div>
      </div>
    </div>
  );
};

export default SignIn;
