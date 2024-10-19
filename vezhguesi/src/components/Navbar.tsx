import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Navbar: React.FC = () => {
    const { user } = useUser();

    const navigate = useNavigate();

    const redirect = (path: string) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(path);

    };

    return (
        <div className=''>
            <header className="flex justify-between items-center p-4 shadow-b bg-white fixed w-[calc(100%-16rem)] z-50 top-0 left-64">
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
                        <span className="text-gray-700 cursor-pointer" onClick={() => redirect('/profile')}>{user?.userData?.firstName} {user?.userData?.lastName}</span>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
