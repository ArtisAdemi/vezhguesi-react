import React from "react";
import { FaHome, FaPen, FaRobot, FaFileAlt, FaStar, FaTools, FaSignOutAlt } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white text-gray-700 w-64 h-screen left-0 top-0 z-1">
      <div className="text-lg font-bold text-gray-700 p-4">LOGO</div>
      <div className="max-w-full h-full left-0 py-[50px] p-4 shadow-md">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <FaHome className="text-blue-500" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaPen className="text-gray-500" />
            <span>Categories</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaRobot className="text-gray-500" />
            <span>Bots</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaFileAlt className="text-gray-500" />
            <span>My Reports</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaStar className="text-gray-500" />
            <span>Favorites</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaTools className="text-gray-500" />
            <span>Tools</span>
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 p-4">
          <button className="flex items-center justify-center w-full bg-gray-700 text-white px-4 py-2 rounded">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
