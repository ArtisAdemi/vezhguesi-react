import React from 'react';
import Card from "../components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
//import 'swiper/css/navigation';

const Trending: React.FC = () => {
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
        <div className="mt-20 overflow-hidden">
            <div className="flex justify-between mb-6">
                <h2 className="text-xl font-semibold">Trending News</h2>
                <div className="flex gap-x-5">
                    <button className="p-3 bg-white rounded-xl hover:scale-105 hover:shadow-md duration-300 swiper-button-prev">
                        Prev
                    </button>
                    <button className="p-3 bg-white rounded-xl hover:scale-105 hover:shadow-md duration-300 swiper-button-next">
                        Next
                    </button>
                </div>
            </div>
            <div className="w-[calc(100vw-5rem)] sm:w-[calc(100vw-21.5rem)] md:w-[calc(100vw-21.5rem)] xl:w-[calc(100vw-21.5rem)] ">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        // >= 768px (md)
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        // >= 1024px (lg)
                        1024: {
                            slidesPerView: 3,
                        },
                        // >= 1280px (xl)
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    className="!w-full"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <Card {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Trending;
