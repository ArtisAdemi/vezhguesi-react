import axios from "axios";
import { Report } from "../models/Reports";
import { API_URL } from "./backendUrl";

class ReportService {
    // Create a new report
    async createReport(report: Report, token: string): Promise<Report> {
        try {
            const response = await axios.post(
                `${API_URL}/reports`,
                report,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        } catch (error) {
            console.error("Failed to create report: ", error);
            throw new Error("Error creating report. Please try again later!");
        }
    }

}

export default new ReportService();