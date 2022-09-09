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

    /* click handeller to generate pw based upon params */
    const createPassword = () =>{
        let length = passwordLength
        let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lower = upper.toLowerCase();
        let number = '0123456789';
        let symbols = '~!@-#$%^*()-=`><?/:;[]';
        let wishlist = {
            ULNS:`${symbols}${number}${upper}${lower}`,
            ULN:`${number}${lower}${number}`,
            UL:`${upper}${lower}`,
            ULS:`${upper}${lower}${symbols}`,
            U:`${upper}`,
            US:`${upper}${symbols}`,
            UNS:`${upper}${number}${symbols}`,
            L:`${lower}`,
            LN:`${lower}${number}`,
            LS:`${lower}${symbols}`,
            LNS:`${lower}${number}${symbols}`
        };
        let output = '';
        // first condition --- uppercase, lowercase, numbers, symbol
        if(includeUpper === 1 && includeLower === 1 && includeNumbers === 1 && includeSymbols===1){
            output=Array.from(crypto.getRandomValues(new Uint32Array(length))).map((x) => wishlist.ULNS[x % wishlist.ULNS.length]).join('');
        }
        // second condition --- uppercase, lowercase, numbers
        else if(includeUpper === 1 && includeLower === 1 && includeNumbers === 1){
            output = Array.from(crypto.getRandomValues(new Uint32Array(length))).map((x) => wishlist.ULN[x % wishlist.ULN.length]).join('');
        }
        // third condition --- uppercase, lowercase
        else if(includeUpper === 1 && includeLower === 1){
            output=Array.from(crypto.getRandomValues(new Uint32Array(length))).map((x) => wishlist.UL[x % wishlist.UL.length]).join('');
        }
        // fourth condition --- uppercase
        else if(includeUpper === 1 && includeLower === 1){
            output=Array.from(crypto.getRandomValues(new Uint32Array(length))).map((x) => wishlist.U[x % wishlist.U.length]).join('');
        }
        // fifth condition --- lower case number
        else if(includeLower === 1 && includeNumbers ===1){
            output=Array.from(crypto.getRandomValues(new Uint32Array(length))).map((x) => wishlist.U[x % wishlist.U.length]).join('');
        }
        console.log(output)
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

        createPassword
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider