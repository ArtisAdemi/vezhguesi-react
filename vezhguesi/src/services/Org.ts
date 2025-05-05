import axios from "axios";
import { ORG_API_URL } from "./backendUrl";
import {
  InviteMemberRequest,
  OrgMembers,
  OrgRequest,
  OrgResponse,
  UserOrgRole,
} from "../models/Org";
import { StatusResponse } from "../models/Globals";

const token = localStorage.getItem("token");

class OrgService {
  async createOrganization(organization: OrgRequest): Promise<OrgResponse> {
    const response = await axios.post(`${ORG_API_URL}/orgs`, organization, {
      headers: { Authorization: `Bearer ${organization.token}` },
    });
    return response.data;
  }

  async findMyOrgs(req: string): Promise<UserOrgRole[]> {
    const response = await axios.get(`${ORG_API_URL}/orgs/me`, {
      headers: { Authorization: `Bearer ${req}` },
    });
    return response.data;
  }

  async getOrgMembers(orgId: number): Promise<OrgMembers> {
    const response = await axios.get(`${ORG_API_URL}/o/${orgId}/members`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  async inviteMember(req: InviteMemberRequest): Promise<StatusResponse> {
    const response = await axios.get(
      `${ORG_API_URL}/o/${req.orgId}/users/invite/${req.email}/${req.roleId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
}

export default new OrgService();
