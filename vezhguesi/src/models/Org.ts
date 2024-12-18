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

export interface OrgMember {
  user: {
    active: boolean;
    avatarImgKey: string;
    email: string;
    firstName: string;
    lastName: string;
    id: number;
    phone: string;
    status: string;
    username: string;
  };
  userOrgRole: {
    orgId: number;
    roleId: number;
    status: string;
    userId: number;
  };
}

export interface OrgMembers {
  orgMembers: OrgMember[];
}

export interface InviteMemberRequest {
  email: string;
  orgId: number;
  roleId: number;
}
