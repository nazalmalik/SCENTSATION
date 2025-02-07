import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = process.env.REACT_APP_BACKEND_URL
export const currency = 'Rs.'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : ''); // Tracks authentication state

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ?
        // Show Login Page if not authenticated
        <Login setToken={setToken} /> :
        // Show Main App if authenticated
        <>
          <div className="flex-1 flex flex-col">
            <Navbar setToken={setToken} />
            <div className="flex h-screen">
              <Sidebar />
              <div className="p-4 flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/add" element={<Add token = {token} />} />
                  <Route path="/list" element={<List token = {token} />} />
                  <Route path="/orders" element={<Orders token = {token} />} />
                </Routes>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default App;
