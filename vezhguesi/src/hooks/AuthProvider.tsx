import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { LoginRequest, LoginResponse, UserData } from "../models/Auth";
import AuthService from "../services/Auth";
import { useUserOrgRole } from './UserOrgRoleProvider';

type AuthContext = {
    authToken?: string | null;
    currentUser?: UserData | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | null | undefined>>;

    handleLogin: (req: LoginRequest) => Promise<LoginResponse>;
    handleLogout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
    const { clearOrgRoles } = useUserOrgRole();
    const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem("token"));
    const [currentUser, setCurrentUser] = useState<UserData | null | undefined>(() => {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (authToken && authToken !== null) {
            async function getCurrentUserData() {
                try {
                    const res = await AuthService.getUserData(authToken as string);
                    setCurrentUser(res);
                    localStorage.setItem("currentUser", JSON.stringify(res));
                } catch {
                    setAuthToken(null);
                    setCurrentUser(null);
                    localStorage.removeItem("currentUser");
                }
            }
            getCurrentUserData();
        }
    }, [authToken]);

    async function handleLogin(req: LoginRequest): Promise<LoginResponse> {
        try {
            const res = await AuthService.login(req);
            const { token, userData } = res;
            setAuthToken(token);
            localStorage.setItem("token", token);
            setCurrentUser(userData);
            localStorage.setItem("currentUser", JSON.stringify(userData));
            return res; // Return the response to satisfy the return type
        } catch (error) {
            setAuthToken(null);
            setCurrentUser(null);
            localStorage.removeItem("currentUser");
            return Promise.reject(error); // Return a rejected promise
        }
    }

    async function handleLogout() {
        setAuthToken(null);
        setCurrentUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        clearOrgRoles();
    }

    return (
        <AuthContext.Provider value={{ authToken, currentUser, setCurrentUser, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
