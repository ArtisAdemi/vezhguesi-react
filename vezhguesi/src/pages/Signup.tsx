import React, { useState } from "react";
import AuthService from "../services/Auth";
import { SignupRequest } from "../models/Auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../assets/google.jpg";
import Swal from "sweetalert2";

const Signup: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const [signupData, setSignupData] = useState<SignupRequest>({
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
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
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors: Partial<SignupRequest> = {};
        if (!signupData.email) newErrors.email = "Email is required";
        if (!signupData.username) newErrors.username = "Username is required";
        if (!signupData.firstName) newErrors.firstName = "First name is required";
        if (!signupData.lastName) newErrors.lastName = "Last name is required";
        if (!signupData.phoneNumber)
            newErrors.phoneNumber = "Phone number is required";
        if (!signupData.password) newErrors.password = "Password is required";
        if (signupData.password !== signupData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
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
            Swal.fire({
                icon: 'success',
                title: 'Signup successful!',
                text: 'An email has been sent into your inbox, in order to verify your account.'
            });
        } catch (error) {
            console.error("Signup error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Signup failed',
                text: 'Please try again.',
            });
        }
    };

    return (
        <div className="flex flex-row items-center justify-evenly bg-white min-h-screen">
            {/* Left side: Signup information */}
            <div className="flex items-center justify-center   ">
                <div className=" p-8 rounded-lg  w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
                    <p className="text-xl mb-4 text-center">
                        Explore insightful content with Vëzhguesi.
                    </p>
                    <p className="text-sm mb-2 text-center">
                        If you already have an account, <br />
                        you can{" "}
                        <a href="/signin" className="text-blue-600 font-semibold">
                            Log in!
                        </a>
                    </p>
                </div>
            </div>

            {/* Right side: Signup form */}
            <div className="flex flex-col md:w-1/3 p-8 items-center">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    {/* Email Input */}
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={signupData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Username Input */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={signupData.username}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                        )}
                    </div>

                    {/* First Name Input */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={signupData.firstName}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    {/* Last Name Input */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={signupData.lastName}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>

                    {/* Phone Number Input */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            value={signupData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="relative mb-4">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-6">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={signupData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <p className="text-sm mt-6">or continue with</p>

                {/* Google Sign-in */}
                <div className="mt-4 ">
                    <div className="border p-4 flex justify-between items-center cursor-pointer rounded-md hover:shadow-lg space-x-2 w-full">
                        <span>Sign in with Google</span>
                        <img src={google} alt="Google logo" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
