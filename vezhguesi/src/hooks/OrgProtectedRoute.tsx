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

    // Check if user has access to this organization
    const hasOrgAccess = userOrgRoles.some(role => role.slug === orgSlug);

    if (!hasOrgAccess) {
        return (
            <div className="flex justify-center items-center">
                <p className="text-2xl font-bold">You don't have access to this organization</p>
            </div>
        );
    }

    return children;
}
