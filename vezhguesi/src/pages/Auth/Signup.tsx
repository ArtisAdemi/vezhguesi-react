import React, { useState } from "react";
import AuthService from "../../services/Auth";
import { SignupRequest } from "../../models/Auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../../assets/google.jpg";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../../assets/image 1.jpg";

const Signup: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

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
        icon: "success",
        title: "Signup successful!",
        text: "An email has been sent into your inbox, in order to verify your account.",
        showConfirmButton: true,
        confirmButtonText: "Continue",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/set-organization");
        }
      });
    } catch (error) {
      console.error("Signup error:", error);
      Swal.fire({
        icon: "error",
        title: "Signup failed",
        text: "Please try again.",
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }} // Background image
    >
      <div className="flex flex-col  p-6 items-center backdrop-blur-md bg-white/10 border border-opacity-10 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Input Fields in Two Columns */}
          <div className="flex flex-col space-y-4 mb-4">
            {/* Row 1: Email and Username */}
            <div className="flex space-x-2">
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={signupData.email}
                  onChange={handleChange}
                  className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={signupData.username}
                  onChange={handleChange}
                  className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
            </div>

            {/* Row 2: First Name and Last Name */}
            <div className="flex space-x-2">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={signupData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={signupData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Row 3: Phone Number and Password */}
            <div className="flex space-x-2">
              <div className="flex-1">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={signupData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <div className="flex-1 relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleChange}
                  className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-white hover:text-blue-500"
                >
                  {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Row 4: Confirm Password */}
            <div className="flex-1">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm placeholder:text-white text-white focus:outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Sign Up
          </button>
          <div className="flex flex-col justify-center mt-4 items-center">
            <p className="text-sm text-white">
              Already have an account? <br />
            </p>
            <Link
              to="/signin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
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

          <div className="border p-4 w-full flex space-x-6 justify-center items-center cursor-pointer rounded-md hover:shadow-lg mt-4">
            <span className="text-white">Sign in with Google</span>
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

export default Signup;
