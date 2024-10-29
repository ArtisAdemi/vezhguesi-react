import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FaHome, FaPen, FaRobot, FaFileAlt, FaStar, FaTools } from 'react-icons/fa';
import Logout from "./Logout";
//import Sidebar from "./Sidebar";

const PageLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`w-64 h-full fixed bg-white p-4 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
        <div className="mb-8">
          <h1 className="text-lg font-bold">Logo</h1>
        </div>
        <nav className="space-y-4">
          <ul className="space-y-4 pl-4">
            <li className="flex items-center space-x-2">
              <Link to="/dashboard" onClick={toggleSidebar} className={`flex space-x-2 items-center ${location.pathname === '/dashboard' ? 'text-[#0C7FDA]' : 'text-gray-500'}`}>
                <FaHome />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/dashboard/categories" onClick={toggleSidebar} className={`flex space-x-2 items-center ${location.pathname === '/dashboard/categories' ? 'text-[#0C7FDA]' : 'text-gray-500'}`}>
                <FaPen />
                <span>Categories</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/dashboard/bots" onClick={toggleSidebar} className={`flex space-x-2 items-center ${location.pathname === '/dashboard/bots' ? 'text-[#0C7FDA]' : 'text-gray-500'}`}>
                <FaRobot />
                <span>Bots</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/dashboard/reports" onClick={toggleSidebar} className={`flex space-x-2 items-center ${location.pathname === '/dashboard/reports' ? 'text-[#0C7FDA]' : 'text-gray-500'}`}>
                <FaFileAlt />
                <span>My Reports</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/dashboard/favorites" onClick={toggleSidebar} className={`flex space-x-2 items-center ${location.pathname === '/dashboard/favorites' ? 'text-[#0C7FDA]' : 'text-gray-500'}`}>
                <FaStar />
                <span>Favorites</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/dashboard/tools" onClick={toggleSidebar} className={`flex space-x-2 items-center ${location.pathname === '/dashboard/tools' ? 'text-[#0C7FDA]' : 'text-gray-500'}`}>
                <FaTools />
                <span>Tools</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 p-4">
          <Logout />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main className="mt-12 border border-t-0 border-b-0 px-8 py-12"
          style={{ boxShadow: 'inset 0 6px 10px rgba(0, 0, 0, 0.15)' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
