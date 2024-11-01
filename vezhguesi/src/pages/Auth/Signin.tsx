import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../../assets/google.jpg";
import { LoginRequest, LoginResponse } from "../../models/Auth";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import image1 from "../../assets/image 1.jpg";

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
      await handleLogin(loginData).then((res: LoginResponse) => {
        console.log(res);
        if (res && res.token) {
          navigate("/dashboard");
        } else if (res && res.error) {
          Swal.fire({
            icon: 'error',
            title: 'Signin failed',
            text: 'Credentials are incorrect.',
          });
        }
      });
    } catch (error) {
      console.error("Failed to sign in:", error);
      Swal.fire({
        icon: "error",
        title: "Signin failed",
        text: "Please try again.",
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center  "
      style={{ backgroundImage: `url(${image1})` }} // Background image
    >
      <div className="flex flex-col items-center w-full max-w-md backdrop-blur-md bg-white/10 border border-opacity-10 text-white shadow-2xl rounded-md p-8">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          Welcome Back
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm text-white placeholder:text-white focus:outline-none"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          {/* Forgot Password link */}
          <div className="flex justify-between w-full mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-white hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Sign In
          </button>
          <div className="flex flex-col  justify-center mt-4  items-center">
            <p className="text-sm ">
              Don't have an account? <br />
            </p>
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-4 w-full">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-white">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google Sign-in */}
          <div className="border p-4 flex space-x-6 justify-center items-center cursor-pointer rounded-md hover:shadow-lg mt-4">
            <span className="">Sign in with Google</span>
            <div className="flex justify-center items-center">
              <img
                src={google}
                alt="Google logo"
                className="w-6 h-6"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
