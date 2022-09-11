import React, {useState, createContext, useEffect} from 'react';
import { passwordStrengths } from '../data/passwordStrengths';
import { passwordCharacters } from '../data/passwordCharacters';
import { getPasswordStrength } from '../utils/utils';
export const AppContext = createContext(null);
const AppContextProvider = ({children}) => {
    const [loading, setLoading]  = useState(false);
    const [password, setPassword] = useState('PTx1f5Dfafx');
    const [wishlist, setWishlist] = useState('');
    const [passwordLength, setPasswordLength] = useState(10);
    /* global strength counter for password str */
    const [strength, setStrength] = useState(0);
    /* Button parameters state on ContentParams */
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [passwordStrengthName , setPasswordStrengthName]= useState(`MEDIUM`);

    useEffect(()=>{
        setStrength(
            passwordLength + (
                (+includeUpper) + 
                (+includeLower) + 
                (+includeNumbers) + 
                (+includeSymbols)
            )
        );
    }, [passwordLength, includeLower, includeNumbers, includeSymbols, includeUpper]);

    useEffect(()=>{
        setPasswordStrengthName(getPasswordStrength(passwordStrengths, strength));
    }, [strength]);

    useEffect(()=>{
        let output = 
        `${includeUpper ? passwordCharacters.upper : ''}${includeLower ? passwordCharacters.lower : ''}${includeNumbers ? passwordCharacters.number : ''}${includeSymbols ? passwordCharacters.symbols : ''}`;
        setWishlist(output);
    }, [strength]);

    const randomlyGenerate = ()=>{
        let output = Array.from(crypto.getRandomValues(new Uint32Array(passwordLength))).map((x) => wishlist[x % wishlist.length]).join('')
        setPassword(output);
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
        setPasswordStrengthName,
        randomlyGenerate
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider