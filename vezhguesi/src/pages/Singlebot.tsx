import React from "react";
// Assuming the uploaded image is in the assets folder

import imgsport from "../assets/imgsport.jpg"; // Your original image

const Singlebot: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10 px-8 py-10">
      {/* Header Section */}
      <div className="flex flex-row items-center space-x-6">
        <h1 className="text-4xl text-[#5D7285] font-bold mb-4 ">BOTS</h1>
        <h6 className="text-lg text-gray-500">Politike</h6>
      </div>
      <div className="p-1">
        <h2 className="text-xl font-semibold">Linku</h2>
      </div>

      {/* Top Image Section */}
      <div className="w-full mt-6 bg-[#F3F5F7] rounded-xl overflow-hidden shadow-md">
        <img
          src={imgsport}
          alt="Main visual"
          className="w-full h-[400px] object-cover"
          loading="lazy"
        />
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet
          ut, sed earum, consectetur autem temporibus accusamus voluptatum quam
          ratione nemo quisquam error quidem minus saepe dolorum suscipit nihil!
          Modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          eveniet ut, sed earum, consectetur autem temporibus accusamus
          voluptatum quam ratione nemo quisquam error quidem minus saepe dolorum
          suscipit nihil! Modi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis eveniet ut, sed earum, consectetur autem
          temporibus accusamus voluptatum quam ratione nemo quisquam error
          quidem minus saepe dolorum suscipit nihil! Modi! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Omnis eveniet ut, sed earum,
          consectetur autem temporibus accusamus voluptatum quam ratione nemo
          quisquam error quidem minus saepe dolorum suscipit nihil! Modi!
        </p>
        <div className="flex flex-row justify-center space-x-10">
          {" "}
          <p>time</p>
          <p>category</p>
          <p>portal</p>
        </div>
      </div>
      <div className="flex flex-col py-5 space-y-4">
        <h1 className="text-xl">
          How to Spend the Perfect Day on Croatia’s Most Magical Island
        </h1>
        <img
          src={imgsport}
          alt="Main visual"
          className="w-full h-[400px] object-cover"
          loading="lazy"
        />
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet
          ut, sed earum, consectetur autem temporibus accusamus voluptatum quam
          ratione nemo quisquam error quidem minus saepe dolorum suscipit nihil!
          Modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          eveniet ut, sed earum, consectetur autem temporibus accusamus
          voluptatum quam ratione nemo quisquam error quidem minus saepe dolorum
          suscipit nihil! Modi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis eveniet ut, sed earum, consectetur autem
          temporibus accusamus voluptatum quam ratione nemo quisquam error
          quidem minus saepe dolorum suscipit nihil! Modi! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Omnis eveniet ut, sed earum,
          consectetur autem temporibus accusamus voluptatum quam ratione nemo
          quisquam error quidem minus saepe dolorum suscipit nihil! Modi!
        </p>
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet
          ut, sed earum, consectetur autem temporibus accusamus voluptatum quam
          ratione nemo quisquam error quidem minus saepe dolorum suscipit nihil!
          Modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          eveniet ut, sed earum, consectetur autem temporibus accusamus
          voluptatum quam ratione nemo quisquam error quidem minus saepe dolorum
          suscipit nihil! Modi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis eveniet ut, sed earum, consectetur autem
          temporibus accusamus voluptatum quam ratione nemo quisquam error
          quidem minus saepe dolorum suscipit nihil! Modi! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Omnis eveniet ut, sed earum,
          consectetur autem temporibus accusamus voluptatum quam ratione nemo
          quisquam error quidem minus saepe dolorum suscipit nihil! Modi!
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Singlebot;
