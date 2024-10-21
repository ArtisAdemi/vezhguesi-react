import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.jpg";
import { LoginRequest } from "../models/Auth";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

const Signin: React.FC = () => {
  const { handleLogin } = useAuth();
  const [loginData, setLoginData] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData: LoginRequest) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleLogin(loginData);
      navigate("/");
    } catch (error) {
      console.error("Failed to sign in:", error);
      Swal.fire({
        icon: 'error',
        title: 'Signin failed',
        text: 'Please try again.',
      });
    }
  };

  return (
    <div className="flex flex-row items-center justify-evenly bg-white min-h-screen">
      {/* Left side: Sign up information */}
      <div className="flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold mb-4">Sign Up to</h2>
        <p className="text-xl mb-4">Lorem Ipsum is simply</p>
        <p className="text-sm text-center mb-4">
          If you don’t have an account, <br />
          you can{" "}
          <a
            href="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register Here!
          </a>
        </p>
      </div>

      {/* Right side: Sign in form */}
      <div className="flex flex-col items-center md:w-1/3 p-8">
        <h1 className="text-3xl font-semibold mb-6">Sign In</h1>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-3 border rounded-md shadow-sm placeholder:text-[#2c2c31] focus:outline-none focus:border-blue-500"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          {/* Forgot Password link */}
          <div className="flex justify-between w-full mb-6">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <p className="text-sm mt-6">or continue with</p>

        {/* Google Sign-in */}
        <div className="mt-4 ">
          <div className="border p-4 flex justify-between items-center cursor-pointer rounded-md hover:shadow-lg space-x-2">
            <span>Sign in with Google</span>
            <img src={google} alt="Google logo" className="w-6 h-6" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
