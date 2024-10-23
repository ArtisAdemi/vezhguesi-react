import React from "react";

const LandingCTA: React.FC = () => {
  return (
    <div className="bg-[#060606] py-40 shadow-2xl  ">
      <div className="relative border border-gray-400 border-opacity-20 shadow-2xl  w-2/3 h-auto bg-black flex flex-col justify-center items-center text-center px-6 py-12 mx-auto rounded-lg">
        <h1 className="text-4xl md:text-5xl font-medium text-[#E0E0E0] mb-8">
          The future of your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            industry
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {" "}
            starts here.
          </span>
        </h1>
        <div className="flex space-x-4">
          <button className="px-6 py-3 border-opacity-20 border-white  border text-[#E0E0E0] font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            Book a Demo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingCTA;
