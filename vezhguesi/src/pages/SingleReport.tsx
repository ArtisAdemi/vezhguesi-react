import React from "react";
import LineChart from "../components/LineChart"; // Make sure the path to LineChart is correct
import imgsport from "../assets/imgsport.jpg";

const SingleReport: React.FC = () => {
  // Sample data for the line chart
  const chartData = [
    {
      id: "Series 1",
      data: [
        { x: "January", y: 30 },
        { x: "February", y: 50 },
        { x: "March", y: 80 },
        { x: "April", y: 40 },
        { x: "May", y: 60 },
      ],
    },
    {
      id: "Series 2",
      data: [
        { x: "January", y: 40 },
        { x: "February", y: 60 },
        { x: "March", y: 70 },
        { x: "April", y: 90 },
        { x: "May", y: 30 },
      ],
    },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h1 className="text-3xl md:text-4xl text-[#5D7285] font-bold text-left">
          Titulli Reportit
        </h1>
      </div>

      {/* Line Chart */}
      <div className="w-full h-[400px] md:h-[500px] mb-10 ">
        <LineChart data={chartData} xAxisLabel="Month" yAxisLabel="Value" />
      </div>

      {/* Image and Description */}
      <div className="flex flex-col justify-center items-center mt-10">
        <img
          src={imgsport}
          alt="Sport Image"
          className="w-full md:w-2/3 lg:w-full mb-6 rounded-lg shadow-lg"
          loading="lazy"
        />
        <div className="lg:text-start w-full ">
          <h1 className="text-center font-semibold text-3xl md:text-4xl mb-4">
            Permbledhje
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            This is the description of the image, providing some details about
            the content shown. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde magni minus rerum nemo dolores at id,
            voluptas quam a atque amet. Atque totam, ipsum fugit tenetur
            incidunt ratione rem neque. This is the description of the image,
            providing some details about the content shown. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Unde magni minus rerum nemo
            dolores at id, voluptas quam a atque amet.
          </p>
        </div>
      </div>

      {/* Entities Section */}
      <div className="mt-12 lg:p-10 font-semibold text-2xl">
        <h2 className="mb-6">Entitet e Permendura</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Entity Item */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={imgsport}
              className=" md:w-1/4 rounded-lg shadow-md"
              loading="lazy"
            />
            <p className="text-start text-gray-600 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              repudiandae rem reiciendis cum, inventore maxime voluptatum? Quo
              cum libero aliquam neque saepe, nisi eligendi minima eaque,
              expedita repellat numquam odit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReport;
