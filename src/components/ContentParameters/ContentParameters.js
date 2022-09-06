import CheckboxParameters from "../CheckboxParameters/CheckboxParameters";
import SubContentDisplay from '../SubContentDisplay/SubContentDisplay';
import Button from "../Button/Button";
import Slider from '@mui/material/Slider';
import { useContext } from "react"
import { AppContext } from "../../context/GlobalContext"

const ContentParameters = ({title}) => {
    const {passwordLength, setPasswordLength} = useContext(AppContext);
    
    return (
        <section className='content-parameters'>
            <div className="content-parameters__content-header">
                <div className="content-header__description">
                    {title}
                </div>
                <div className="content-header__output">
                    {passwordLength}
                </div>
            </div>
            <Slider
                className="content-parameters__slider"
                marks={false}
                defaultValue={10}
                min={0}
                max={20}
                valueLabelDisplay='off'
                onChange={(e, val)=>setPasswordLength(val)}
            />
            <CheckboxParameters/>
            <SubContentDisplay/>
            <Button/>
        </section>
    )
}

export default ContentParameters