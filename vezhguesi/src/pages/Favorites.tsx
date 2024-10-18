import React from "react";
import Card from "../components/Card";

const Favorites: React.FC = () => {
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
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl text-[#5D7285] font-bold">Favorites</h1>
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
  );
};

export default Favorites;
