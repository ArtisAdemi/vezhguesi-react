import React from "react";
import image1 from "../../assets/image 1.jpg";
const Landinghero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <img
        src={image1}
        srcSet={`${image1} 1024w, ${image1} 2048w`}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Empower Your Future <br />
          with Crypteez’s Trading Platform
        </h1>
        <button className="px-6 py-3 bg-transparent w-1/2 sm:w-1/3 md:w-1/6 text-[#E0E0E0]  border border-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
          Try Vezhguesi
        </button>
      </div>
    </div>
  );
};

export default Landinghero;
