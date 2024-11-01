import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import image1 from "../../assets/image 1.jpg";

// Sample data including positive and negative sentiment counts for each month
const data = [
  { name: "Jan", positive: 300, negative: 200 },
  { name: "Feb", positive: 400, negative: 400 },
  { name: "Mar", positive: 500, negative: 700 },
  { name: "Apr", positive: 450, negative: 450 },
  { name: "May", positive: 800, negative: 600 },
  { name: "Jun", positive: 600, negative: 400 },
  { name: "Jul", positive: 900, negative: 400 },
  { name: "Aug", positive: 700, negative: 800 },
  { name: "Sep", positive: 950, negative: 750 },
];

// Data for the pie chart, showing overall positive and negative sentiment counts
const pieData = [
  {
    name: "Positive",
    value: data.reduce((acc, item) => acc + item.positive, 0),
  },
  {
    name: "Negative",
    value: data.reduce((acc, item) => acc + item.negative, 0),
  },
];

const COLORS = ["#3A57E8", "#85F4FA"]; // Blue for Positive, Red for Negative

const CustomGraph: React.FC = () => {
  const [isBarChart, setIsBarChart] = useState(true);

  const toggleChartView = () => {
    setIsBarChart(!isBarChart);
  };

  return (
    <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg md:w-4/5 max-w-lg">
      {/* Header with Toggle Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">
          Donald Trump Sentiment Analysis
        </h2>
        <button
          onClick={toggleChartView}
          className="text-xs px-6 py-2  text-white font-bold rounded-lg  transition-all duration-200"
        >
          {isBarChart ? "Change View" : "Change View"}
        </button>
      </div>

      {/* Chart View */}
      <ResponsiveContainer width="100%" height={250}>
        {isBarChart ? (
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#9e9eff" />
            <YAxis stroke="#ffffff" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                borderColor: "#666",
                color: "#ffffff",
              }}
              formatter={(value: number) => value.toLocaleString()}
            />
            <Bar dataKey="positive" fill="#3A57E8" radius={[10, 10, 0, 0]} />
            <Bar dataKey="negative" fill="#85F4FA" radius={[10, 10, 0, 0]} />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                borderColor: "#666",
                color: "#ffffff",
              }}
              formatter={(value: number) => value.toLocaleString()}
            />
            <Legend
              payload={[
                { value: "Positive", type: "circle", color: COLORS[0] },
                { value: "Negative", type: "circle", color: COLORS[1] },
              ]}
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              iconSize={10}
            />
          </PieChart>
        )}
      </ResponsiveContainer>

      {/* Legend and Months Display */}
      <div className="text-white mt-4 flex justify-center items-center">
        {/* Legend for Bar Chart */}
        {isBarChart && (
          <div className="flex space-x-4 justify-center items-center">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#3A57E8] mr-2"></span>
              <span className="text-sm">Positive</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#85F4FA] mr-2"></span>
              <span className="text-sm">Negative</span>
            </div>
          </div>
        )}
        {/* Months Label for Reference */}
      </div>

      {/* Metrics Display */}
      <div className="text-white mt-6 flex justify-between">
        <div className="text-center">
          <p className="text-2xl font-bold">
            {pieData[0].value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-400">Positive Sentiment</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">
            {pieData[1].value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-400">Negative Sentiment</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-400">
            {(
              (pieData[0].value / (pieData[0].value + pieData[1].value)) *
              100
            ).toFixed(1)}
            %
          </p>
          <p className="text-sm text-gray-400">Positive Percentage</p>
        </div>
      </div>
    </div>
  );
};

export default CustomGraph;
