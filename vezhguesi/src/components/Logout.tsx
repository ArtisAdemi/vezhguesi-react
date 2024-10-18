import React from 'react'
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/Auth';

const Logout: React.FC = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        setUser(null);
        navigate("/signin");
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout