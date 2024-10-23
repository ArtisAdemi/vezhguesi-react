import React, { useState } from 'react'
import AuthService from '../../services/Auth'

const ForgotPw: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            // Assume sendPasswordResetEmail is a function that sends the reset email
            await AuthService.forgotPassword(email);
            setMessage('Password reset email sent successfully.');
        } catch {
            setMessage('Error sending password reset email.');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPw;
