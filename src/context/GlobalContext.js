import React, {useState, createContext, useEffect} from 'react';
import { passwordStrengths } from '../data/passwordStrengths';
export const AppContext = createContext(null);
const AppContextProvider = ({children}) => {
    const [loading, setLoading]  = useState(false);
    const [password, setPassword] = useState('PTx1f5Dfafx');
    const [passwordLength, setPasswordLength] = useState(10);
    /* global strength counter for password str */
    const [strength, setStrength] = useState(0);
    /* Button parameters state on ContentParams */
    const [includeUpper, setIncludeUpper] = useState(1);
    const [includeLower, setIncludeLower] = useState(1);
    const [includeNumbers, setIncludeNumbers] = useState(1);
    const [includeSymbols, setIncludeSymbols] = useState(0);
    const [passwordStrengthName , setPasswordStrengthName]= useState(`MEDIUM`);

    useEffect(()=>{
        setStrength(passwordLength+(includeUpper+includeLower + includeNumbers + includeSymbols));
    }, [passwordLength, includeLower, includeNumbers, includeSymbols, includeUpper]);

    useEffect(()=>{
        setPasswordStrengthName(getPasswordStrength());
    }, [strength]);

    const getPasswordStrength = ()=>{
        return passwordStrengths.filter((passwordStrength) => 
            strength >= passwordStrength.min &&
            strength <= passwordStrength.max
        )[0].name;
    }
    const value = {
        loading, 
        setLoading, 
        password,
        setPassword,
        passwordLength,
        setPasswordLength,
        includeUpper,
        setIncludeUpper,
        strength,
        setStrength,
        includeLower,
        setIncludeLower,
        includeNumbers,
        setIncludeNumbers,
        includeSymbols,
        setIncludeSymbols,
        passwordStrengthName,
        setPasswordStrengthName
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider