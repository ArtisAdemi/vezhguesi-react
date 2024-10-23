import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthService from '../../services/Auth';

const ResetPassword: React.FC = () => {
    const { token } = useParams<{ token: string }>();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }
        if (!token) {
            setMessage('Invalid token.');
            return;
        }
        try {
            // Assume resetPassword is a function that sends the reset request
            await AuthService.resetPassword(token, password, confirmPassword);
            setMessage('Password reset successfully.');
        } catch {
            setMessage('Error resetting password.');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    New Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
