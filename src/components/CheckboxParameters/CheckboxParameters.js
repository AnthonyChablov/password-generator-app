import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
const CheckboxParameters = () => {
    return (
        <>
            <CustomCheckbox description={"Include Uppercase Letters"}/>
            <CustomCheckbox description={"Include Lowercase Letters"}/>
            <CustomCheckbox description={"Include Numbers"}/>
            <CustomCheckbox description={"Include Symbols"}/>
        </>
    )
}
export default CheckboxParameters