import axios from "axios";
import { Report } from "../models/Reports";
import { API_URL } from "./backendUrl";

class ReportService {
    // Create a new report
    async createReport(report: Report, token: string): Promise<Report> {
        const response = await axios.post(`${API_URL}/reports`, report, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    }



    // Fetch all reports
    // async getReports(): Promise<Report[]> {
    //     const response = await axios.get(`${API_URL}/reports`);
    //     return response.data;
    // }

    // // Fetch a report by subject
    // async getReportBySubject(subject: string): Promise<Report | undefined> {
    //     const response = await axios.get(`${API_URL}/reports/${subject}`);
    //     return response.data;
    // }

    // // Update an existing report
    // async updateReport(subject: string, updatedReport: Partial<Report>): Promise<Report> {
    //     const response = await axios.put(`${API_URL}/reports/${subject}`, updatedReport);
    //     return response.data;
    // }

    // // Delete a report by subject
    // async deleteReport(subject: string): Promise<void> {
    //     await axios.delete(`${API_URL}/reports/${subject}`);
    // }
}

export default new ReportService();