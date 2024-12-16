export interface OrgResponse {
  id: number;
  name: string;
  size: string;
  slug: string;
}

export interface OrgRequest {
  name: string;
  size: string;
  token: string;
}

export interface UserOrgRole {
  userId: number;
  orgId: number;
  roleId: number;
  slug: string;
  name: string;
}
