import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaHome,
  FaPen,
  FaRobot,
  FaFileAlt,
  FaStar,
  FaTools,
  FaUserFriends,
  FaAngleLeft,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Logout from "../Logout";
import Navbar from "../Navbar";

const OrgPageLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`w-64 h-full fixed bg-white p-4 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0`}
      >
        <div className="mb-16">
          <h1 className="text-lg font-bold text-start mt-2">Logo</h1>
        </div>
        <nav className="space-y-10">
          <ul className="space-y-2 ">
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaHome size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard/categories"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard/categories"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaPen size={20} />
                <span>Categories</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard/bots"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard/bots"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaRobot size={20} />
                <span>Bots</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard/reports"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard/reports"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaFileAlt size={20} />
                <span>Reports</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard/favorites"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard/favorites"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaStar size={20} />
                <span>Favorites</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard/tools"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard/tools"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaTools size={20} />
                <span>Tools</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard/members"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard/members"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaUserFriends size={20} />
                <span>Members</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/dashboard/settings"
                onClick={toggleSidebar}
                className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                  location.pathname === "/dashboard/settings"
                    ? "text-blue-500"
                    : "text-gray-500"
                } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
              >
                <FaGear size={20} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full  left-0 p-4">
          <li className="flex items-center space-x-2 mb-5">
            <Link
              to="/dashboard/organizations"
              onClick={toggleSidebar}
              className={`flex space-x-4 font-medium text-lg items-center px-1 py-2 w-full rounded-md ${
                location.pathname === "/organizations"
                  ? "text-blue-500"
                  : "text-gray-500"
              } hover:bg-[#E9F5FE] hover:text-blue-500 transition-colors duration-200`}
            >
              <FaAngleLeft size={20} />
              <span>User Dashboard</span>
            </Link>
          </li>
          <Logout />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main
          onClick={() => setIsSidebarOpen(false)}
          className="mt-12 border border-t-0 border-b-0 px-8 py-12 w-screen md:w-full overflow-hidden"
          //Qeto 3 tailwind properties po e nreqin,
          //po arsyeja pse shkaktohet overflow jane Charts
          style={{ boxShadow: "inset 0 6px 10px rgba(0, 0, 0, 0.15)" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OrgPageLayout;
