import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import { useUserOrgRole } from "./UserOrgRoleProvider";
import NotLoggedIn from "../components/NotLoggedIn";
import { useAuth } from "./useAuth";

type OrgProtectedRouteProps = PropsWithChildren;

export default function OrgProtectedRoute({ children }: OrgProtectedRouteProps) {
    const { orgSlug } = useParams();
    const { userOrgRoles } = useUserOrgRole();
    const { currentUser } = useAuth();

    if (currentUser === undefined) {
        return <NotLoggedIn />;
    }

    if (currentUser === null) {
        return <NotLoggedIn />;
    }

    // Safely check if userOrgRoles is an array before calling .some()
    const hasOrgAccess = Array.isArray(userOrgRoles) && userOrgRoles.length > 0 
        ? userOrgRoles.some(role => role.slug === orgSlug)
        : false;

    if (!hasOrgAccess) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
                    <p className="text-gray-700 mb-6">You don't have access to this organization.</p>
                    <a 
                        href="/dashboard/organizations" 
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                        Go to My Organizations
                    </a>
                </div>
            </div>
        );
    }

    return children;
}
