import React from "react";
import hero4 from "../../assets/hero4.jpg";
import svg from "../../assets/SVG.svg";

const LandingMission: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-[2.5%] items-center w-full bg-[#030014] text-white py-20 md:py-32 relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-8">
        Our Mission with Vezhguesi
      </h2>

      {/* Background Image */}
      <div className="relative w-full">
        <img src={hero4} alt="Hero Background" className="w-full h-[500px] md:h-2/3 lg:h-3/4" />

        {/* Central Card (Like in your screenshot) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
          <div className="bg-white bg-opacity-10 backdrop-filter md:-mt-16 backdrop-blur-lg border border-white border-opacity-20 rounded-lg shadow-lg p-6 md:w-1/3">
            <h2 className="text-lg font-bold text-white">
              How to use AI to take better notes
              <span className="ml-2 text-pink-500">✨ Click to see magic</span>
            </h2>

            <ul className="mt-4">
              <li className="text-sm text-white">
                • What can LLMs like GPT do, specifically for note-taking?{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Below Card */}
      <div className="p-4 w-full -mt-24 md:-mt-[25%] z-20 flex flex-col items-center md:p-16">
        {/* Icons and Text */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-8 md:space-y-0 md:space-x-12">
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

        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center">
            <img src={svg} alt="Custom Icon 3" className="w-16 h-16" />
            <h1 className="text-[#E0E0E0] font-semibold text-2xl mt-4">
              Customizable Features
            </h1>
            <p className="text-[#E0E0E0] text-center w-2/3 mt-2">
              Tailor the experience to your needs with flexible features that
              adjust based on your preferences.
            </p>
          </div>

          {/* Fourth Card */}
          <div className="flex flex-col items-center">
            <img src={svg} alt="Custom Icon 4" className="w-16 h-16" />
            <h1 className="text-[#E0E0E0] font-semibold text-2xl mt-4">
              Real-time Collaboration
            </h1>
            <p className="text-[#E0E0E0] text-center w-2/3 mt-2">
              Collaborate with others in real-time, no matter where you are.
              Stay connected and efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMission;