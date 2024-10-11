import React from "react";

const Favorites: React.FC = () => {
  const cards = [
    {
      title: "Opening Day Of Boating Season, Seattle WA",
      description: "Of Course The Puget Sound Is Very Watery, And Where There Is Water, There Are Boats. Today Is...",
      date: "August 18, 2022",
      likes: "453 Likes",
      image: "/images/car.jpg", // Replace with actual image path
      profileImage: "path/to/profile1.jpg", // Replace with actual profile image path
      author: "Lorem Ipsum",
    },
    {
      title: "How We Built The First Real Self-Driving Car",
      description: "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
      date: "July 14, 2022",
      likes: "123 Likes",
      image: "/images/car.jpg", // Replace with actual image path
      profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
      author: "Lorem Ipsum",
    },
    {
      title: "How We Built The First Real Self-Driving Car",
      description: "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
      date: "July 14, 2022",
      likes: "123 Likes",
      image: "/images/car.jpg", // Replace with actual image path
      profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
      author: "Lorem Ipsum",
    },
    {
      title: "How We Built The First Real Self-Driving Car",
      description: "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
      date: "July 14, 2022",
      likes: "123 Likes",
      image: "/images/car.jpg", // Replace with actual image path
      profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
      author: "Lorem Ipsum",
    },
    {
      title: "How We Built The First Real Self-Driving Car",
      description: "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
      date: "July 14, 2022",
      likes: "123 Likes",
      image: "/images/car.jpg", // Replace with actual image path
      profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
      author: "Lorem Ipsum",
    },
    {
      title: "How We Built The First Real Self-Driving Car",
      description: "Electric Self-Driving Cars Will Save Millions Of Lives And Significantly Accelerate The World’s...",
      date: "July 14, 2022",
      likes: "123 Likes",
      image: "/images/car.jpg", // Replace with actual image path
      profileImage: "path/to/profile2.jpg", // Replace with actual profile image path
      author: "Lorem Ipsum",
    },
    // Add more card objects as needed
  ];

  return (
    <div className=" p-4">
      <h1 className="text-4xl text-[#5D7285] font-bold">Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-lg font-semibold mt-2">{card.title}</h2>
            <p className="text-gray-600 mt-1">{card.description}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex">
                <img src={card.profileImage} alt="Profile" className="w-10 h-10 rounded-full" />
                <div className="ml-2">
                  <p className="text-sm font-medium">{card.author}</p>
                  <p className="text-xs text-gray-500">{card.date}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">{card.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
