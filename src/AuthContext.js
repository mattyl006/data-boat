import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async ({ username, password }) => {
       if (username === 'Stocznia' && password === 'UAM2023!') {
            setUser({ id: '1', username });
        } else {
            throw new Error('Błędne dane!');
        }
    };

    const logout = () => {
        // Perform logout logic here
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
