import React from "react";
import image1 from "../assets/image 1.jpg";
const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-32 p-6 bg-transparent text-white z-50">
        <div className="text-2xl font-bold">VEZHGUESI</div>
        <div className="space-x-8 text-sm md:text-lg">
          <a href="#product" className="hover:text-gray-300">
            Product
          </a>
          <a href="#pricing" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="#clients" className="hover:text-gray-300">
            Clients
          </a>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <img
          src={image1}
          alt=""
          className="absolute inset- w-full h-full object-cover"
        />
        {/* Radial Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 10%, rgba(18, 18, 18, 0.8) 70%)",
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute  bg-black opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empower Your Future <br />
            with Crypteez’s Trading Platform
          </h1>
        </div>
      </div>

      {/* New Section */}
      <section className="flex flex-col md:flex-row justify-between items-center py-20 px-10 bg-black text-white">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Introducing Vezhguesi</h2>
          <p className="text-lg mb-6">
            Our next-generation model brings the world to your fingertips with
            its cutting-edge AI technology. Explore the latest news across
            various topics effortlessly, curated and delivered by our
            intelligent bot.
          </p>
          <p className="text-lg mb-6">
            Experience the future of news consumption with Vezhguesi.
          </p>
          <button className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg">
            Try Vezhguesi
          </button>
        </div>

        {/* Right Side (Graphs/Mockups) */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <img src={image1} alt="App Dashboard" className="w-full" />
            Add another image or graphic as overlay if needed
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
