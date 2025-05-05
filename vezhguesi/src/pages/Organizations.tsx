import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import SetOrganization from "../components/SetOrganization";
import { useQuery } from "react-query";
import OrgService from "../services/Org";
import { UserOrgRole } from "../models/Org";
import { useNavigate } from "react-router-dom";

const Organizations: React.FC = () => {
  const { currentUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { authToken } = useAuth();

  // Use React Query to fetch organizations
  const {
    data: organizations,
    isLoading,
    isError,
    error,
  } = useQuery<UserOrgRole[], Error>(
    ["organizations"],
    () => OrgService.findMyOrgs(authToken!),
    {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching organizations: {error.message}</p>;
  }

  const handleOrganizationClick = (slug: string) => {
    navigate(`/o/${slug}/dashboard`);
  };

  return (
    <>
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="pb-6 border-b border-gray-200 mb-12">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back,{" "}
            <span className="text-blue-600">{currentUser?.firstName}</span>!
          </h1>
        </div>

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Your Organizations
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Organization
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations &&
            organizations?.length > 0 &&
            organizations.map((org) => (
              <div
                key={`${org.userId}-${org.orgId}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleOrganizationClick(org.slug)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                      {org.name}
                    </h3>
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Click to view details and manage organization
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white z-50 hover:opacity-75"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <SetOrganization onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Organizations;
