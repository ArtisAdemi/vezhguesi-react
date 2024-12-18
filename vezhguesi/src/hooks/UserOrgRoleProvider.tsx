import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserOrgRole } from '../models/Org';

interface UserOrgRoleContextType {
    userOrgRoles: UserOrgRole[];
    setUserOrgRoles: (roles: UserOrgRole[]) => void;
    clearOrgRoles: () => void;
}

export const UserOrgRoleContext = createContext<UserOrgRoleContextType | undefined>(undefined);

export const UserOrgRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userOrgRoles, setUserOrgRoles] = useState<UserOrgRole[]>(() => {
        const storedRoles = localStorage.getItem("userOrgRoles");
        return storedRoles ? JSON.parse(storedRoles) : [];
    });

    useEffect(() => {
        localStorage.setItem("userOrgRoles", JSON.stringify(userOrgRoles));
    }, [userOrgRoles]);

    const clearOrgRoles = () => {
        setUserOrgRoles([]);
        localStorage.removeItem("userOrgRoles");
    };

    return (
        <UserOrgRoleContext.Provider value={{ userOrgRoles, setUserOrgRoles, clearOrgRoles }}>
            {children}
        </UserOrgRoleContext.Provider>
    );
};

export const useUserOrgRole = () => {
    const context = useContext(UserOrgRoleContext);
    if (context === undefined) {
        throw new Error('useUserOrgRole must be used within a UserOrgRoleProvider');
    }
    return context;
}; 