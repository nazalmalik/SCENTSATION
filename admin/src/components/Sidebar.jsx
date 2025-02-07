import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="w-64 bg-gray-900 text-white h-full p-4 overflow-auto"
      style={{
        overflow: "auto",
      }}
    >
      <style>
        {`
      div::-webkit-scrollbar {
        display: none; /* Hides scrollbar in Chrome */
      }
    `}
      </style>
      <ul className="space-y-4">

        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${isActive ? "bg-[#2E485F]" : "bg-[#111827]"
              } hover:bg-[#2E485F]`
            }
          >
            Add Product
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${isActive ? "bg-[#2E485F]" : "bg-[#111827]"
              } hover:bg-[#2E485F]`
            }
          >
            Products List
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${isActive ? "bg-[#2E485F]" : "bg-[#111827]"
              } hover:bg-[#2E485F]`
            }
          >
            Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
