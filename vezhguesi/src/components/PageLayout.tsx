import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FaHome, FaPen, FaRobot, FaFileAlt, FaStar, FaTools } from 'react-icons/fa';
import Logout from "./Logout";
//import Sidebar from "./Sidebar";

const PageLayout: React.FC = () => {

  const location = useLocation();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 h-full fixed bg-white p-4 z-50">
        <div className="mb-8">
          <h1 className="text-lg font-bold">Logo</h1>
        </div>
        <nav className="space-y-4">
          <ul className="space-y-4 pl-4">
            <li className="flex items-center space-x-2">
              <Link to="/" className={`flex space-x-2 items-center ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}>
                <FaHome />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/categories" className={`flex space-x-2 items-center ${location.pathname === '/categories' ? 'text-blue-500' : 'text-gray-500'}`}>
                <FaPen />
                <span>Categories</span>
              </Link>

            </li>
            <li className="flex items-center space-x-2">
              <Link to="/bots" className={`flex space-x-2 items-center ${location.pathname === '/bots' ? 'text-blue-500' : 'text-gray-500'}`}>
                <FaRobot />
                <span>Bots</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/reports" className={`flex space-x-2 items-center ${location.pathname === '/reports' ? 'text-blue-500' : 'text-gray-500'}`}>
                <FaFileAlt />
                <span>My Reports</span>
              </Link>
              <a href="/reports" className={`flex space-x-2 items-center ${location.pathname === '/reports' ? 'text-blue-500' : 'text-gray-500'}`}>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/favorites" className={`flex space-x-2 items-center ${location.pathname === '/favorites' ? 'text-blue-500' : 'text-gray-500'}`}>
                <FaStar />
                <span>Favorites</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link to="/tools" className={`flex space-x-2 items-center ${location.pathname === '/tools' ? 'text-blue-500' : 'text-gray-500'}`}>
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
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

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
