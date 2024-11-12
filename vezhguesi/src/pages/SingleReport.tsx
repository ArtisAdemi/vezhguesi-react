import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReportsService from "../services/Reports";
import { ReportEntity } from "../models/Reports";

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
    console.log("entity name : ", entity_name);
    console.log("________________________________");

  }, [entity_name]);

  useEffect(() => {
    console.log("report: ", report);
  }, [report]);

  if (loading) {
    return <p>Loading report...</p>;
  }


  return (
    <div>
      <h1>Report for: {entity_name}</h1>
      {report ? (
        <div>
          <h2>{report.entity_name}</h2>
          <p>{report.summary || "No summary available"}</p>
          <p className="text-red-700">{report?.average_sentiment}</p>
          {/* Add more report details here as needed */}
        </div>
      ) : (
        <p>No report found for this entity.</p>
      )}
    </div>
  );
};

export default SingleReport;
