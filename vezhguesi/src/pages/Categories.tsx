import React, { useState } from "react";
import Card2 from "../components/Card2";
import Card from "../components/Card";

type Card = {
  title: string;
  description: string;
  author: string;
  likes: number;
  img: string;
};
const cards = [
  {
    title: "Opening Day Of Boating Season, Seattle WA",
    description:
      "Of Course The Puget Sound Is Very Watery, And Where There Is Water, There Are Boats. Today Is...",
    date: "August 18, 2022",
    likes: 453,
    image: "/images/car.jpg", // Replace with actual image path
    profileImage: "path/to/profile1.jpg", // Replace with actual profile image path
    author: "Lorem Ipsum",
  },
  {
    title: "How We Built The First Real Self-Driving Car",
    description:
      "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
    date: "July 14, 2022",
    likes: 123,
    image: "/images/car.jpg", // Replace with actual image path
    profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
    author: "Lorem Ipsum",
  },
  {
    title: "How We Built The First Real Self-Driving Car",
    description:
      "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
    date: "July 14, 2022",
    likes: 123,
    image: "/images/car.jpg", // Replace with actual image path
    profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
    author: "Lorem Ipsum",
  },
  {
    title: "How We Built The First Real Self-Driving Car",
    description:
      "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
    date: "July 14, 2022",
    likes: 123,
    image: "/images/car.jpg", // Replace with actual image path
    profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
    author: "Lorem Ipsum",
  },
  {
    title: "How We Built The First Real Self-Driving Car",
    description:
      "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
    date: "July 14, 2022",
    likes: 123,
    image: "/images/car.jpg",
    profileImage: "path/to/profile2.jpg",
    author: "Lorem Ipsum",
  },
  {
    title: "How We Built The First Real Self-Driving Car",
    description:
      "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
    date: "July 14, 2022",
    likes: 123,
    image: "/images/car.jpg",
    profileImage: "path/to/profile2.jpg",
    author: "Lorem Ipsum",
  },
];

type Category = "Technology" | "Food";

const cardData: Record<Category, Card[]> = {
  Technology: [
    {
      title: "10 Latest Technology Trends",
      description: "Stay ahead with the latest developments in technology...",
      author: "Sarah Johnson",
      likes: 512,
      img: "https://via.placeholder.com/150",
    },
    {
      title: "AI and the Future",
      description: "Artificial Intelligence is transforming industries...",
      author: "Michael Lee",
      likes: 405,
      img: "https://via.placeholder.com/150",
    },
  ],
  Food: [
    {
      title: "Top 10 Healthy Recipes",
      description:
        "Explore these quick and healthy recipes for a balanced diet...",
      author: "Emily Clark",
      likes: 289,
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Best Street Food Around the World",
      description:
        "Discover the best street food dishes from different cultures...",
      author: "John Smith",
      likes: 678,
      img: "https://via.placeholder.com/150",
    },
  ],
};

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Technology");

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-4xl text-[#5D7285] font-bold mb-4">Categories</h1>

      {/* Buttons for categories */}
      <div className="flex flex-row space-x-4 mb-6">
        {Object.keys(cardData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as Category)}
            className={`${selectedCategory === category ? "bg-blue-700" : "bg-blue-500"
              } text-white px-4 py-2 rounded-[9px] hover:bg-blue-600`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0">
        {cardData[selectedCategory].map((card, index) => (
          <Card2
            key={index}
            title={card.title}
            description={card.description}
            likes={card.likes}
            author={card.author}
          />
        ))}
      </div>
      <div className="mt-12">
        {" "}
        <h1 className="text-lg font-bold">Trending News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              date={card.date}
              likes={card.likes}
              image={card.image}
              profileImage={card.profileImage}
              author={card.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
