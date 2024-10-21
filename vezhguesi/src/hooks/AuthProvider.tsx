import { createContext, PropsWithChildren, useContext, useState, useEffect } from "react";
import { LoginRequest, UserData } from "../models/Auth";
import AuthService from "../services/Auth";

type AuthContext = {
    authToken?: string | null;
    currentUser?: UserData | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | null | undefined>>; // Allow undefined

    handleLogin: (req: LoginRequest) => Promise<void>;
    handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>();
    const [currentUser, setCurrentUser] = useState<UserData | null>();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token && token !== null && token !== "undefined") {
            setAuthToken(token);
            async function getCurrentUserData() {
                if (token) { // Ensure token is not null
                    const res = await AuthService.getUserData(token);
                    setCurrentUser(res);
                }
            }
            getCurrentUserData();

        }

    }, [token])

    async function handleLogin(req: LoginRequest) {
        try {
            const res = await AuthService.login(req);
            const { token, userData } = res;
            setAuthToken(token);
            localStorage.setItem("token", token);
            setCurrentUser(userData);
        } catch {
            setAuthToken(null);
            setCurrentUser(null);
        }
    }

    async function handleLogout() {
        setAuthToken(null);
        setCurrentUser(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ authToken, currentUser, setCurrentUser, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}  
