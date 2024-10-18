import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../services/Auth";

const VerifyEmail: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {
        try {
          await AuthService.verifyEmail({ token });
          alert("Email verified successfully!");
          navigate("/"); // Redirect to dashboard
        } catch (error) {
          console.error("Verification failed:", error);
          alert("Email verification failed. Please try again.");
        }
      } else {
        alert("Invalid verification link.");
      }
    };

    verifyEmail();
  }, [navigate, token]);

  return (
    <div className="verify-email">
      <h1>Verifying your email...</h1>
    </div>
  );
};

export default VerifyEmail;
