import React, {useState, createContext} from 'react';

export const AppContext = createContext(null);

const AppContextProvider = ({children}) => {
    const [loading, setLoading]  = useState(false);
    const [password, setPassword] = useState('PTx1f5Dfafx');
    const [passwordLength, setPasswordLength] = useState(10);

    const value = {
        loading, 
        setLoading, 
        password,
        setPassword,
        passwordLength,
        setPasswordLength
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider