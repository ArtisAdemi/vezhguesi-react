import React from "react";

const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-[#060606]  border-t-2 border-white border-opacity-20 text-white py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          &copy; {new Date().getFullYear()} Vezhguesi. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
