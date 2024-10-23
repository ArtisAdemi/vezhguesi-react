import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { LoginRequest, UserData } from "../models/Auth";
import AuthService from "../services/Auth";

type AuthContext = {
    authToken?: string | null;
    currentUser?: UserData | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | null | undefined>>;

    handleLogin: (req: LoginRequest) => Promise<void>;
    handleLogout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
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

    async function handleLogin(req: LoginRequest) {
        try {
            const res = await AuthService.login(req);
            const { token, userData } = res;
            setAuthToken(token);
            localStorage.setItem("token", token);
            setCurrentUser(userData);
            localStorage.setItem("currentUser", JSON.stringify(userData));
        } catch {
            setAuthToken(null);
            setCurrentUser(null);
            localStorage.removeItem("currentUser");
        }
    }

    async function handleLogout() {
        setAuthToken(null);
        setCurrentUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
    }

    return (
        <AuthContext.Provider value={{ authToken, currentUser, setCurrentUser, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
