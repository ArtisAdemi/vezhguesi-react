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
        try {
            const storedRoles = localStorage.getItem("userOrgRoles");
            console.log("Initializing userOrgRoles from localStorage:", storedRoles);
            
            if (storedRoles) {
                const parsedRoles = JSON.parse(storedRoles);
                console.log("Parsed userOrgRoles:", parsedRoles);
                return Array.isArray(parsedRoles) ? parsedRoles : [];
            }
            return [];
        } catch (error) {
            console.error("Error loading userOrgRoles from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            console.log("Saving userOrgRoles to localStorage:", userOrgRoles);
            localStorage.setItem("userOrgRoles", JSON.stringify(userOrgRoles));
        } catch (error) {
            console.error("Error saving userOrgRoles to localStorage:", error);
        }
    }, [userOrgRoles]);

    const clearOrgRoles = () => {
        console.log("Clearing organization roles");
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