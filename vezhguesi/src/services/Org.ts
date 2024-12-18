import axios from "axios";
import { ORG_API_URL } from "./backendUrl";
import { OrgRequest, OrgResponse, UserOrgRole } from "../models/Org";

const token = localStorage.getItem("token");

class OrgService {
  async createOrganization(organization: OrgRequest): Promise<OrgResponse> {
    const response = await axios.post(`${ORG_API_URL}/orgs`, organization, {
      headers: { Authorization: `Bearer ${organization.token}` },
    });
    return response.data;
  }

  async findMyOrgs(): Promise<UserOrgRole[]> {
    const response = await axios.get(`${ORG_API_URL}/orgs/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}

export default new OrgService();
