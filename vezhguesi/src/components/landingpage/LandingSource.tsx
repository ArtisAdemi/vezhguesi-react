import React from "react";
import svg from "../../assets/SVG.svg";
import hero2 from "../../assets/rrot.jpg";

const LandingSource: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#030014] text-white py-20 md:py-40 relative">
      {/* Background Image */}
      <img src={hero2} alt="Hero Background" className="max-w-full h-auto" />
      <img
        src={hero2}
        alt="Hero Background Rotated"
        className="max-w-full h-auto rotate-180 opacity-15"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-95"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col mt-[30%] justify-center items-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#E0E0E0] font-semibold mt-20">
          Your Automated News Source
        </h2>
        <p className="text-[#E0E0E0] w-3/4 md:w-1/2 text-base md:text-lg mt-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta
          molestiae hic aperiam totam molestias, eum ad architecto eaque ea
          quasi porro non pariatur ducimus cum sed? Esse, et adipisci.
        </p>

        {/* Info Cards Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-20 space-y-10 md:space-y-0 md:space-x-12">
          {/* First Card */}
          <div className="flex flex-col items-center">
            <img src={svg} alt="Device Icon" className="w-16 h-16" />
            <h1 className="text-[#E0E0E0] font-semibold text-2xl mt-4">
              Integrated with your devices
            </h1>
            <p className="text-[#E0E0E0] text-center w-2/3 mt-2">
              We're everywhere, mobile or desktop, online or offline. Everything
              is synced in real-time.
            </p>
          </div>

          {/* Divider (for larger screens) */}
          <div className="hidden md:block h-16 border-l border-white opacity-20 mx-4"></div>

          {/* Second Card */}
          <div className="flex flex-col items-center">
            <img src={svg} alt="Sync Icon" className="w-16 h-16" />
            <h1 className="text-[#E0E0E0] font-semibold text-2xl mt-4">
              Stay in sync, always
            </h1>
            <p className="text-[#E0E0E0] text-center w-2/3 mt-2">
              Whether you're at home or on the go, stay updated with the latest
              news, synced seamlessly across all platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSource;
