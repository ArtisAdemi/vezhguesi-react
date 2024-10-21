import { PropsWithChildren } from "react";
import { UserData } from "../models/Auth";
import { useAuth } from "./AuthProvider";
import NotLoggedIn from "../components/NotLoggedIn";

type ProtectedRouteProps = PropsWithChildren & {
    allowedRoles: UserData['role'][];
};

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
    const { currentUser } = useAuth();

    if (currentUser === undefined) {
        return <NotLoggedIn />
    }

    if (currentUser === null || (allowedRoles && !allowedRoles.includes(currentUser.role))) {
        if (currentUser === null) {
            return <NotLoggedIn />
        }
        return <div>Permission denied</div>
    }

    return children;
}