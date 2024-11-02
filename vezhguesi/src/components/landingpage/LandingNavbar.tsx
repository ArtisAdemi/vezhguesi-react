import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  const redirect = (path: string) => {
    navigate(path);
  };
  return (

    //            mobile breakpoint -> 2.5% space each side (95% width)
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 rounded-lg mt-6 flex justify-between items-center py-4 px-4 max-w-7xl w-[95%] md:w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 text-white z-50  shadow-lg">
      <div className="text-2xl font-bold">VEZHGUESI</div>

      <div className="hidden md:flex space-x-4">
        <button
          className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          onClick={() => redirect("/signin")}
        >
          Sign In
        </button>
        <button
          className="px-4 py-2 bg-transparent border hover:bg-white hover:text-black rounded"
          onClick={() => redirect("/signup")}
        >
          Sign Up
        </button>
      </div>

      <button onClick={toggleMenu} className="md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 max-w-xs w-full bg-black bg-opacity-90 text-white p-4 md:hidden rounded-lg">
          <a href="" className="block py-2 hover:text-gray-300">
            Product
          </a>
          <a href="" className="block py-2 hover:text-gray-300">
            Pricing
          </a>
          <a href="" className="block py-2 hover:text-gray-300">
            Clients
          </a>
          <button
            className="w-full text-left py-2 mt-4 border border-white rounded hover:bg-white hover:text-black transition"
            onClick={() => redirect("/signin")}
          >
            Sign In
          </button>
          <button
            className="w-full text-left py-2 mt-4 border border-white hover:bg-white hover:text-black rounded"
            onClick={() => redirect("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>

  );
};

export default LandingNavbar;
