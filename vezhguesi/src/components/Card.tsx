import React from "react";

interface CardProps {
  title: string;
  description: string;
  date: string;
  likes: number;
  image: string;
  profileImage: string;
  author: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  date,
  likes,
  image,
  profileImage,
  author,
}) => {
  return (
    <div className="bg-white  shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      <div className="flex items-center bg-[#F5F5F5] rounded-lg p-3 justify-between mt-4">
        <div className="flex">
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full"
            loading="lazy"
          />
          <div className="ml-2">
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">{likes} Likes</p>
      </div>
    </div>
  );
};

export default Card;
