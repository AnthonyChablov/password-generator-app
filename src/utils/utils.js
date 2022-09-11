export const getPasswordStrength = (passwordStrengths, strength)=>{
    return passwordStrengths.filter((passwordStrength) => 
        strength >= passwordStrength.min &&
        strength <= passwordStrength.max
    )[0].name;
}