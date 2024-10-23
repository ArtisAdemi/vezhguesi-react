import React from "react";
import hero4 from "../../assets/hero4.jpg";

const LandingMission: React.FC = () => {
  return (
    <div className="relative bg-[#060606] w-full ">
      <div>
        <img src={hero4} alt="" className="w-full" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-lg shadow-lg p-6 w-1/3">
          <h2 className="text-lg font-bold text-white">
            How to use AI to take better notes
            <span className="ml-2 text-pink-500">✨ Click to see magic</span>
          </h2>
          <ul className="mt-4">
            <li className="text-sm text-white">
              • What can LLMs like GPT do, specifically for note-taking?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingMission;
