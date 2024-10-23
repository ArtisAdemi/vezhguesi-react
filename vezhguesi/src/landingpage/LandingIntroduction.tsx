import React from "react";
import homejpg from "../assets/Home (3).jpg";

const LandingIntroduction: React.FC = () => {
  return (
    <section className="w-full bg-[#060606] text-[#E0E0E0]  py-20 md:py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-x-32 items-center">
        <div className="md:w-1/3 mb-10 md:mb-0 flex flex-col justify-center">
          <div className="flex flex-col mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#E0E0E0] font-semibold">
              Introducing
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#4B97F3] font-semibold">
              Vezhguesi
            </h2>
          </div>
          <p className="text-base md:text-lg mb-4">
            Our next-generation model brings the world to your fingertips with
            its cutting-edge AI technology. Explore the latest news across
            various topics effortlessly, curated and delivered by our
            intelligent bot.
          </p>
          <p className="text-base md:text-lg mb-6">
            Experience the future of news consumption with Vezhguesi.
          </p>
          <button className="px-6 py-3 bg-transparent w-1/2 border-opacity-20 text-white border border-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
            Try Vezhguesi
          </button>
        </div>
        <div className="relative flex items-center justify-center w-full md:w-2/3">
          <img
            src={homejpg}
            alt="App Dashboard"
            className="rounded-lg shadow-lg opacity-80 object-cover border border-white border-opacity-20"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingIntroduction;
