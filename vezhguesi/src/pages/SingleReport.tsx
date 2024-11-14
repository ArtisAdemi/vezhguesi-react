import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReportsService from "../services/Reports";
import { ReportEntity } from "../models/Reports";
import imgsport from "../assets/imgsport.jpg";
import PieChart from "../components/PieChart";


const SingleReport: React.FC = () => {
  const { entity_name } = useParams<{ entity_name: string }>();
  const [report, setReport] = useState<ReportEntity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      ReportsService.getMyReports(token).then((data) => {
        const selectedReport = data.entities.find(
          (report: ReportEntity) => report.entity_name === entity_name
        );
        setReport(selectedReport || null);
        setLoading(false);
      });
    }


  }, [entity_name]);

  // useEffect(() => {
  //   console.log("report: ", report);
  // }, [report]);



  if (loading) {
    return <p>Loading report...</p>;
  }

  if (report === null) {
    return <p>Report not found</p>;
  }


  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h1 className="text-3xl md:text-4xl text-[#5D7285] font-bold text-left">
          Report: {report?.entity_name}
        </h1>
      </div>

      {/* Line Chart */}
      <div className="w-full h-[400px] md:h-[500px] mb-10 ">

        {report && (
          <div className="text-center">
            <PieChart averageSentiment={report.average_sentiment} />
            <p className="mt-2 text-sm text-gray-600">
              Sentiment Analysis: {report.average_sentiment > 0 ? 'Positive' : report.average_sentiment < 0 ? 'Negative' : 'Neutral'}
              ({(((report.average_sentiment + 1) / 2) * 100).toFixed(1)}%)
            </p>
          </div>
        )}

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
            {report?.summary}
          </p>
        </div>
      </div>

      {/* Entities Section */}
      <div className="mt-12 lg:p-10 font-semibold text-2xl">
        <h2 className="mb-6">Entitet e Permendura</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Entity Item */}
          {report?.related_entities.map((entity, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={imgsport}
                className=" md:w-1/4 rounded-lg shadow-md"
                loading="lazy"
              />
              <p className="text-start text-gray-600 text-base leading-relaxed">
                {entity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleReport;
