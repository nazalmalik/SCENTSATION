import React from "react";

const Navbar = ({setToken}) => {
  return (
    <div className="h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">Scentsation Admin</h1>
      <button
        onClick={()=>setToken('')}
        className="bg-[#D2A44F] hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;