import axios from "axios";
import { ORG_API_URL } from "./backendUrl";
import { OrgRequest, OrgResponse } from "../models/Org";

class OrgService {
    async createOrganization(organization: OrgRequest): Promise<OrgResponse> {
        const response = await axios.post(`${ORG_API_URL}/orgs`, organization, {
            headers: { Authorization: `Bearer ${organization.token}` }
        });
        return response.data;
    }
}

export default new OrgService();
