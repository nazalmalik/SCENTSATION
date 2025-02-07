import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
      if (response.data.success) {
        setToken(response.data.token)
        toast.success("Login successful!");
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }


  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-[#1d3243] w-96 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#D2A44F" }}>
          Admin Login
        </h2>
        <input
          onChange={(e) => setEmail(e.target.value)} value={email} type="email"
          placeholder="Email" required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          onChange={(e) => setPassword(e.target.value)} value={password} type="password"
          placeholder="Password" required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-[#0b6153] text-white py-3 rounded-lg font-semibold hover:bg-[#0D8370]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
