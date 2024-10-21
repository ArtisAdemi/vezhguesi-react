import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../services/Auth";
import Swal from "sweetalert2";

const VerifyEmail: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {
        try {
          await AuthService.verifyEmail({ token });
          Swal.fire({
            icon: 'success',
            title: 'Email verified successfully!',
            showConfirmButton: true,
          });
          navigate("/signin"); // Redirect to dashboard
        } catch (error) {
          console.error("Verification failed:", error);
          Swal.fire({
            icon: 'error',
            title: 'Email verification failed!',
            text: 'Please try again.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid verification link!',
          text: 'Please try again.',
        });
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
