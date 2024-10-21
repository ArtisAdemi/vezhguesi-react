import axios from "axios";
import { Report } from "../models/Reports";
import { API_URL } from "./backendUrl";

class ReportService {
    // Create a new report
    async createReport(report: Report, token: string): Promise<Report> {
        const response = await axios.post(`${API_URL}/reports`, report, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    }

}

export default new ReportService();