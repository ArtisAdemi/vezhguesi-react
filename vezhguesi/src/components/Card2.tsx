import React from "react";
import img1 from "../assets/img1.png";
import favorites from "../assets/favorites.svg";

interface CardProps {
  title: string;
  description: string;
  //date?: string;
  likes: number;
  //image: string;
  //profileImage: string;
  author: string;
}

const Card2: React.FC<CardProps> = ({ title, description, likes, author }) => {
  return (
    <div className="flex flex-row mt- bg-white shadow-md rounded-lg overflow-hidden md:w-[458px] md:h-[210px]">
      {/* Image Section */}
      <img
        className="w-1/3 object-cover h-full p-2 rounded-2xl"
        src={img1}
        alt="Card Image"
        loading="lazy"
      />

      {/* Content Section */}
      <div className="p-4 w-2/3 flex flex-col justify-between ">
        <div>
          <h2 className="font-semibold text-lg mb-2">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex mt-4">
            <img src={img1} alt="Profile" className="w-10 h-10 rounded-full" loading="lazy" />
            <div className="flex flex-col pl-3">
              <span className="text-gray-700">{author}</span>
              <h4 className="text-sm">{likes} likes</h4>
            </div>
          </div>
          <img
            src={favorites}
            alt="Favorites icon"
            className="items-center mt-4"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Card2;
