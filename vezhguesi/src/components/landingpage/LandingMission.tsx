import React from "react";
import hero4 from "../../assets/hero4.jpg";
import svg from "../../assets/SVG.svg";

const LandingMission: React.FC = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-full bg-[#030014] text-white py-20 md:py-32 relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-8">
        Our Mission with Vezhguesi
      </h2>
      {/* Background Image */}
      <img src={hero4} alt="Hero Background" className="  " />

      {/* Gradient Overlay */}
      <div className="absolute bottom-10 left-0 w-full h-1/3  opacity-90"></div>

      {/* Central Card (Like in your screenshot) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center ">
        {/* Card Container */}
        <div className="absolute bottom-20 inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-lg shadow-lg p-6 w-1/3">
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
      <div className="absolute bottom-1 p-16 w-full flex flex-col items-center">
        {/* Icons and Text */}
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

        <div className="flex flex-col md:flex-row justify-center items-center mt-14 space-y-10 md:space-y-0 md:space-x-12">
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
