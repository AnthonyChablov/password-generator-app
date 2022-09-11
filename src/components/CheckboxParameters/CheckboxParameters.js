import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
const CheckboxParameters = () => {
    const {
        setIncludeUpper, 
        setIncludeLower, 
        setIncludeNumbers, 
        setIncludeSymbols
    } = useContext(AppContext);
    const handleChangeUpper = ((event)=>{
        setIncludeUpper((event.target.checked));
    });
    const handleChangeLower = ((event)=>{
        setIncludeLower((event.target.checked));
    });
    const handleChangeNumbers = ((event)=>{
        setIncludeNumbers((event.target.checked));
    });
    const handleChangeSymbols = ((event)=>{
        console.log(event.target.checked)
        setIncludeSymbols((event.target.checked));
    });
    return (
        <>
            <CustomCheckbox 
                description={"Include Uppercase Letters"} 
                defaultChecked={true}
                handleChange={handleChangeUpper}
            />
            <CustomCheckbox 
                description={"Include Lowercase Letters"} 
                defaultChecked={true}
                handleChange={handleChangeLower}
            />
            <CustomCheckbox 
                description={"Include Numbers"} 
                defaultChecked={true}
                handleChange={ handleChangeNumbers}
            />
            <CustomCheckbox 
                description={"Include Symbols"}  
                defaultChecked={false}
                handleChange={handleChangeSymbols}
            />
        </>
    )
}
export default CheckboxParameters