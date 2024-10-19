import React from 'react'
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/Auth';
import { FaSignOutAlt } from 'react-icons/fa';

const Logout: React.FC = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        setUser(null);
        navigate("/signin");
    }

    return (
        <button onClick={handleLogout}
            className="flex items-center justify-center w-full bg-gray-700 text-white px-4 py-2 rounded">
            <FaSignOutAlt className="mr-2" />
            Logout
        </button>
    )
}

export default Logout