import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/usefirebase';


export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;