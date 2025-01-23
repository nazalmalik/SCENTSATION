import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const [token, setToken] = useState(""); // Tracks authentication state

  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        // Show Login Page if not authenticated
        <Login  />
      ) : (
        // Show Main App if authenticated
        <>
          <div className="flex-1 flex flex-col">
            <Navbar/>
            <div className="flex h-screen">
              <Sidebar />
              <div className="p-4 flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
              </div>
            </div>
            <ToastContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
