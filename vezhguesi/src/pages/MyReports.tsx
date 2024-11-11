import React, { useEffect, useState } from "react";
import imgsport from "../assets/imgsport.jpg";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import mockData from "../assets/data/mockData";
import ReportsForm from "../components/ReportsForm";
import ReportsService from "../services/Reports";
import { ReportEntity } from "../models/Reports";

const MyReports: React.FC = () => {
  const viewOptions = ["pie", "lineGraph"];
  const [selectedView, setSelectedView] = useState<string>(viewOptions[0]);
  const [reportFormModal, setReportFormModal] = useState(false);
  const [reports, setReports] = useState<ReportEntity[]>([]);
  const changeView = () => {
    setSelectedView((prevView) =>
      prevView === viewOptions[0] ? viewOptions[1] : viewOptions[0]
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      ReportsService.getMyReports(token).then((data) => setReports(data.entities));
    }
  }, []);

  useEffect(() => {
    console.log(reports);
  }, [reports]);

  return (
    <div className="bg-[#EFF2F4]">
      {/* Header section */}
      <div className="flex flex-row justify-between my-10 md:my-0 md:p-10 items-center">
        <h1 className="text-4xl text-[#5D7285] font-bold mb-4">My Reports</h1>
        <button onClick={() => setReportFormModal(true)}
          className="p-3 px-8 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          + New Report
        </button>
      </div>

      {/* Recent Reports section */}
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:justify-between md:p-10">
        {/* Recent Reports Section */}
        <div className="md:w-1/2 bg-white p-10 rounded-lg shadow-xl px-10">
          <h2 className="text-2xl font-semibold mb-4">Recent reports</h2>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div
                key={index}
                className={`flex flex-row p-4 border rounded-lg bg-[#EFF2F4] hover:shadow-lg`}
              >
                {/* Image */}
                <div className="mr-4 w-1/2">
                  <img
                    src={imgsport} // Replace this with the path to your actual image
                    alt={`Report ${report}`}
                    className="w-full h-full object-cover rounded"
                    loading="lazy"
                  />
                </div>

                {/* Report content */}
                < div className="flex-grow w-1/2" >
                  <h3 className="text-xl font-bold shadow-2xl mb-2">
                    {report.entity_name}
                  </h3>
                  <p className="text-gray-600 line-clamp-5">
                    {report.summary}
                  </p>
                  <div className="flex items-center">
                    <button className="text-gray-600 font-semibold">
                      See more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for right side content */}
        <div className="md:w-1/3 bg-white rounded-lg shadow-xl py-10 px-10">
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
            style={{ height: "320px" }}
          >
            {selectedView === "pie" && reports.length > 0 && (
              <div className="text-center">
                <PieChart averageSentiment={reports[0].average_sentiment} />
                <p className="mt-2 text-sm text-gray-600">
                  Sentiment Analysis: {reports[0].average_sentiment > 0 ? 'Positive' : 'Negative'}
                  ({(((reports[0].average_sentiment + 1) / 2) * 100).toFixed(1)}%)
                </p>
              </div>
            )}
            {selectedView === "lineGraph" && (
              <LineChart
                data={mockData}
                xAxisLabel="Muajt"
                yAxisLabel="mentions"
              />
            )}
          </div>
        </div>
      </div >
      {reportFormModal && <ReportsForm closeModal={() => setReportFormModal(false)} />}
    </div >
  );
};

export default MyReports;
