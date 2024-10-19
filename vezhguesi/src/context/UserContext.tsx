// context/UserContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { LoginResponse } from '../models/Auth';
import AuthService from '../services/Auth'; // Function to validate token & fetch user from backend

interface UserContextType {
    user: LoginResponse | null; // Add this line
    setUser: (user: LoginResponse | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<LoginResponse | null>(null);

    // Function to cache user data in session storage
    const cacheUserInLocalStorage = (userData: LoginResponse | null) => {
        if (userData) {
            const userInfo = userData.userData;
            const token = userData.token;
            localStorage.setItem('userData', JSON.stringify(userInfo));
            localStorage.setItem('token', token);
        }
    };

    // Function to restore user from session storage
    const restoreUserFromLocalStorage = (): LoginResponse | null => {
        const storedUser = localStorage.getItem('userData');

        if (storedUser) {
            const cachedUser: LoginResponse = {
                token: localStorage.getItem('token') || "",
                userData: JSON.parse(storedUser)
            };
            return cachedUser;
        }

        return null;
    };

    // On page reload, check if user data is cached in session storage
    useEffect(() => {
        const sessionUser = restoreUserFromLocalStorage();
        if (sessionUser) {
            setUser(sessionUser); // Restore user context without making an API call
        } else {
            // If no session data, fetch from the backend
            const fetchUser = async () => {
                try {
                    const token = localStorage.getItem("token");
                    if (token) {
                        const userData = await AuthService.getUserData(token);  // Single backend call to validate token
                        if (userData) {
                            setUser(userData);
                            cacheUserInLocalStorage(userData);  // Cache user data for future reloads
                        }
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setUser(null);  // Clear user state on error
                }
            };

            fetchUser();
        }
    }, []);

    // Ensure that any update to user context is cached
    useEffect(() => {
        cacheUserInLocalStorage(user);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
