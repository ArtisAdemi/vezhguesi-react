import React, { useState } from "react";
import AuthService from "../../services/Auth";
import image1 from "../../assets/image 1.jpg";
import { Link } from "react-router-dom";

const ForgotPw: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Assume sendPasswordResetEmail is a function that sends the reset email
      await AuthService.forgotPassword(email);
      setMessage("Password reset email sent successfully.");
    } catch {
      setMessage("Error sending password reset email.");
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-md backdrop-blur-md bg-white/10 border border-opacity-10 text-white shadow-2xl rounded-md p-8">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Reset Password
        </h2>
        <p className="text-center w-3/4 mb-6">
          Enter your email address and we will send you instructions to reset
          your password.
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <label className="text-[#E0E0E0] mb-2 block">
            <h1 className="text-white mb-2">Email</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-10 rounded-md shadow-sm text-white placeholder:text-white focus:outline-none"
              placeholder="Enter your email"
            />
          </label>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 mt-4"
          >
            Submit
          </button>
          <Link
            to="/signin"
            className="mt-4 text-white hover:underline text-center block"
          >
            Back to Log In
          </Link>
        </form>
        {message && (
          <p className="text-[#E0E0E0] text-center mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPw;
{
  /* <div className="justify center items-center">
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
    </div> */
}
