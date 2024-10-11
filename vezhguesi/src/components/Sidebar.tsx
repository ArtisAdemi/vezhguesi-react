import React from 'react';
import { FaHome, FaPen, FaRobot, FaFileAlt, FaStar, FaTools, FaSignOutAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    // I want to add a hover effect to the sidebar items and know which one is active from url
    const location = useLocation();

    return (
        <div className="bg-white text-gray-700 w-64 h-screen left-0 top-0 z-1">
            <div className="text-lg font-bold text-gray-700 p-4 pl-8 pt-6">LOGO</div>
            <div className='max-w-full h-full left-0 py-[50px] p-4 shadow-md'>
                <ul className="space-y-4 pl-4">
                    <li className="flex items-center space-x-2">
                        <a href="/" className={`flex space-x-2 items-center ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}>
                            <FaHome />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <a href="/categories" className={`flex space-x-2 items-center ${location.pathname === '/categories' ? 'text-blue-500' : 'text-gray-500'}`}>
                            <FaPen />
                            <span>Categories</span>
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <a href="/bots" className={`flex space-x-2 items-center ${location.pathname === '/bots' ? 'text-blue-500' : 'text-gray-500'}`}>
                            <FaRobot />
                            <span>Bots</span>
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <a href="/reports" className={`flex space-x-2 items-center ${location.pathname === '/reports' ? 'text-blue-500' : 'text-gray-500'}`}>
                            <FaFileAlt />
                            <span>My Reports</span>
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <a href="/favorites" className={`flex space-x-2 items-center ${location.pathname === '/favorites' ? 'text-blue-500' : 'text-gray-500'}`}>
                            <FaStar />
                            <span>Favorites</span>
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <a href="/tools" className={`flex space-x-2 items-center ${location.pathname === '/tools' ? 'text-blue-500' : 'text-gray-500'}`}>
                            <FaTools />
                            <span>Tools</span>
                        </a>
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
