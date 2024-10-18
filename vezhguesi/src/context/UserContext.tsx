// context/UserContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { LoginResponse } from '../models/Auth';

interface UserContextType {
    user: LoginResponse | null;
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

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
