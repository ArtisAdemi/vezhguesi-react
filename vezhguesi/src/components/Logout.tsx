import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

const Logout: React.FC = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        handleLogout();
        navigate("/signin");
      }}
      className="flex items-center justify-start w-full bg-gray-700 text-white px-4 py-2 rounded"
    >
      <FaSignOutAlt className="mr-2" />
      Logout
    </button>
  );
};

export default Logout;
