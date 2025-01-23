import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here if needed
    navigate("/login");
  };

  return (
    <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">Scentsation Admin</h1>
      <button
        onClick={handleLogout}
        className="bg-[#D2A44F] hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;