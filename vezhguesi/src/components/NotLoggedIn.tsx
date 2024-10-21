import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotLoggedIn: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center h-screen'>You are not signed in, please signin to continue
            <button onClick={() => navigate('/signin')} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Go to Signin</button>
        </div>
    )
}

export default NotLoggedIn