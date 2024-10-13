import React, { useState } from 'react'
import AuthService from '../services/Auth';
import { SignupRequest } from '../models/Users';

const Signup: React.FC = () => {
    const [signupData, setSignupData] = useState<SignupRequest>({
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState<Partial<SignupRequest>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData((prevData: SignupRequest) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validate = () => {
        const newErrors: Partial<SignupRequest> = {};
        if (!signupData.email) newErrors.email = 'Email is required';
        if (!signupData.username) newErrors.username = 'Username is required';
        if (!signupData.firstName) newErrors.firstName = 'First name is required';
        if (!signupData.lastName) newErrors.lastName = 'Last name is required';
        if (!signupData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!signupData.password) newErrors.password = 'Password is required';
        if (signupData.password !== signupData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            await AuthService.signup(signupData);
            alert('Signup successful!');
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-[8%] xl:px-[16%] min-h-screen bg-white">
            <div className="flex flex-col items-center md:items-start md:w-1/2 p-8">
                <h1 className="text-2xl font-bold mb-2">Your Logo</h1>
                <h2 className="text-3xl font-bold mb-2">Sign Up to</h2>
                <p className="text-xl mb-4">Lorem Ipsum is simply</p>
                <p className="text-sm mb-2">
                    If you already have an account
                    <br />
                    You can <a href="#" className="text-blue-600">Login here!</a>
                </p>
                <img src="path/to/your/image.png" alt="Illustration" className="hidden md:block mt-4" />
            </div>
            <div className="flex flex-col items-center md:w-1/2 p-8 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={signupData.email}
                        onChange={handleChange}
                        className="w-full p-3 mb-1 bg-white rounded-md shadow-sm"
                    />
                    {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={signupData.username}
                        onChange={handleChange}
                        className="w-full p-3 mb-1 bg-white rounded-md shadow-sm"
                    />
                    {errors.username && <p className="text-red-500 text-sm mb-3">{errors.username}</p>}
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={signupData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 mb-1 bg-white rounded-md shadow-sm"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mb-3">{errors.firstName}</p>}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={signupData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 mb-1 bg-white rounded-md shadow-sm"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mb-3">{errors.lastName}</p>}
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter Phone Number"
                        value={signupData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-3 mb-1 bg-white rounded-md shadow-sm"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mb-3">{errors.phoneNumber}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={signupData.password}
                        onChange={handleChange}
                        className="w-full p-3 mb-1 bg-white rounded-md shadow-sm"
                    />
                    {errors.password && <p className="text-red-500 text-sm mb-3">{errors.password}</p>}
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={signupData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-3 mb-1 bg-white rounded-md shadow-sm"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mb-3">{errors.confirmPassword}</p>}
                    <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700">
                        Sign Up
                    </button>
                </form>
                <p className="text-sm mt-4">or continue with</p>
                <div className="flex space-x-4 mt-2">
                    <button className="p-2 bg-blue-600 rounded-full text-white">F</button>
                    <button className="p-2 bg-black rounded-full text-white">A</button>
                    <button className="p-2 bg-red-600 rounded-full text-white">G</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
