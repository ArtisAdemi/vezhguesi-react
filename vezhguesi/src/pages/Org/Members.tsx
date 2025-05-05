import React, { useState, useEffect } from "react";
//import { useAuth } from "../../hooks/useAuth";
import OrgService from "../../services/Org";
import { InviteMemberRequest, OrgMember, OrgMembers } from "../../models/Org";
import { useUserOrgRole } from "../../hooks/UserOrgRoleProvider";
import { useParams } from "react-router-dom";
import { roleIdToString } from "../../helper/helper";
import Swal from "sweetalert2";

const Members: React.FC = () => {
  //const { currentUser } = useAuth();
  const [members, setMembers] = useState<OrgMembers>();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRoleId, setNewMemberRoleId] = useState(0);
  const { orgSlug } = useParams();
  const { userOrgRoles } = useUserOrgRole();

  const orgId = userOrgRoles.find((org) => org.slug === orgSlug)?.orgId || 0;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await OrgService.getOrgMembers(orgId); // Adjust this to fetch members
        setMembers(response);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleInviteMember = async () => {
    try {
      // Call your invite member service here
      let req: InviteMemberRequest = {
        email: newMemberEmail,
        orgId: orgId,
        roleId: newMemberRoleId,
      };
      await OrgService.inviteMember(req); // Adjust this to your actual service
      Swal.fire("Success", "Member invited successfully!", "success");
      setNewMemberEmail("");
      setIsModalOpen(false);
    } catch (error) {
      Swal.fire("Error", "Failed to invite member.", "error");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="pb-6 border-b border-gray-200 mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Members</h1>
        </div>

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Your Organization Members
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 shadow-md"
          >
            Invite Member
          </button>
        </div>

        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members &&
              members.orgMembers
                .filter((member: OrgMember) => member.user.username) // Filter out members without a username
                .map((member: OrgMember) => (
                  <tr
                    key={member.user.id}
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="py-2 px-4 border-b">
                      {member.user.username}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {roleIdToString(member.userOrgRole.roleId)}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button className="text-blue-600 hover:underline flex items-center">
                        <i className="fas fa-user-circle mr-1"></i> View Profile
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Modal Overlay for Inviting Members */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Invite a New Member</h2>
              <input
                type="email"
                placeholder="Enter member's email"
                value={newMemberEmail}
                onChange={(e) => setNewMemberEmail(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-4"
              />
              <select
                name="role"
                id="role"
                onChange={(e) => setNewMemberRoleId(Number(e.target.value))}
              >
                <option value={2}>Admin</option>
                <option value={3}>User</option>
              </select>
              <button
                onClick={handleInviteMember}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send Invite
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
