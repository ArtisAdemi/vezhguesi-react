import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {

    const navigate = useNavigate();

    const redirect = (path: string) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(path);

    };

    return (
        <div
            className="flex items-center justify-between px-10 py-4 bg-white"
            style={{ boxShadow: '3px 3px 3px 0px rgba(0, 0, 0, 0.1)' }}
        >
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                    type="text"
                    placeholder="Search Anything"
                    className="bg-transparent outline-none text-gray-700"
                />
                <FaSearch className="text-gray-500 ml-2" />
            </div>
            <div className="flex items-center space-x-4">
                <FaBell className="text-gray-500" />
                <div className="flex items-center space-x-2">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-700 cursor-pointer" onClick={() => redirect('/profile')}>Austin Robertson</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;