import { PropsWithChildren } from "react";
import { UserData } from "../models/Auth";
import { useAuth } from "./useAuth";
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
        return (
            <div className="flex justify-center items-center">
                <p className="text-2xl font-bold">Permission denied</p>
            </div>
        )
    }

    return children;
}