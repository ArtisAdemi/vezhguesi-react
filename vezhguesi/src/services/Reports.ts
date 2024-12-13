import axios from "axios";
import { MyReportsResponse, Report } from "../models/Reports";
import { MAIN_API_URL } from "./backendUrl";

class ReportService {
    // Create a new report
    async createReport(report: Report, token: string): Promise<Report> {
        try {
            const response = await axios.post(
                `${MAIN_API_URL}/reports`,
                report,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        } catch (error) {
            console.error("Failed to create report: ", error);
            throw new Error("Error creating report. Please try again later!");
        }
    }

    async getMyReports(token: string): Promise<MyReportsResponse> {
        try {
            const response = await axios.get(`${MAIN_API_URL}/reports/my-reports`, { headers: { Authorization: `Bearer ${token}` } });
            return response.data;
        } catch (error) {
            console.error("Failed to get my reports: ", error);
            throw new Error("Error getting my reports. Please try again later!");
        }
    }
}

export default new ReportService();