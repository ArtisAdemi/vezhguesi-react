import React, { useState } from "react";
import imgsport from "../assets/imgsport.jpg";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import mockData from "../assets/data/mockData";
import mockSentimentData from "../assets/data/mockSentimentData";

const MyReports: React.FC = () => {
  const viewOptions = ["pie", "lineGraph"];
  const [selectedView, setSelectedView] = useState<string>(viewOptions[0]);

  const changeView = () => {
    setSelectedView((prevView) =>
      prevView === viewOptions[0] ? viewOptions[1] : viewOptions[0]
    );
  };

  const transformedData = mockSentimentData
    .map((item) => {
      const positiveValue = item.data
        .filter((d) => d.y > 0)
        .reduce((acc, curr) => acc + curr.y, 0);

      const negativeValue = item.data
        .filter((d) => d.y < 0)
        .reduce((acc, curr) => acc + Math.abs(curr.y), 0);

      return [
        { id: `${item.id}-positive`, label: "Positive", value: positiveValue },
        { id: `${item.id}-negative`, label: "Negative", value: negativeValue },
      ];
    })
    .flat();

  return (
    <div className="bg-[#EFF2F4]">
      {/* Header section */}
      <div className="flex flex-row justify-between p-10 items-center">
        <h1 className="text-4xl text-[#5D7285] font-bold mb-4">MyReports</h1>
        <button className="p-3 px-8 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          + New Report
        </button>
      </div>

      {/* Recent Reports section */}
      <div className="flex justify-between p-10">
        {/* Recent Reports Section */}
        <div className="w-1/2 bg-white p-10 rounded-lg shadow-xl px-10">
          <h2 className="text-2xl font-semibold mb-4">Recent reports</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((report, index) => (
              <div
                key={index}
                className={`flex flex-row p-4 border rounded-lg ${report === 1 ? "border-[#EFF2F4]" : ""
                  } bg-[#EFF2F4] hover:shadow-lg`}
              >
                {/* Image */}
                <div className="w-20 h-20 mr-4">
                  <img
                    src={imgsport} // Replace this with the path to your actual image
                    alt={`Report ${report}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Report content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold shadow-2xl mb-2">
                    Report {report}
                  </h3>
                  <p className="text-gray-600">
                    AI can analyze user data and behavior to create personalized
                    experiences for individual users. This can help designers
                    create interfaces that adapt to each user’s preferences,
                    making the interface more intuitive and user-friendly.
                  </p>
                  <div className="flex items-center">
                    <button className="text-gray-600 font-semibold">
                      See more
                    </button>
                  </div>
                </div>

                {/* See More button */}
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for right side content */}
        <div className="w-1/3 bg-white rounded-lg shadow-xl py-10 px-10">
          {/* You can add any additional content here */}
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="text-2xl text-[#5D7285] font-semibold">Report 1</h2>
            <button
              className="text-[#5D7285] font-md"
              onClick={() => changeView()}
            >
              Change View
            </button>
          </div>

          {/* Centered Pie Chart */}
          <div
            className="flex justify-center items-center w-full mt-20"
            style={{ height: "300px" }}
          >
            {selectedView === "pie" && <PieChart data={transformedData} />}
            {selectedView === "lineGraph" && (
              <LineChart
                data={mockData}
                xAxisLabel="Muajt"
                yAxisLabel="mentions"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReports;
