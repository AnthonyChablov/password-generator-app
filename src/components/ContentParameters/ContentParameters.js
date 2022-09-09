import CheckboxParameters from "../CheckboxParameters/CheckboxParameters";
import SubContentDisplay from '../SubContentDisplay/SubContentDisplay';
import Button from "../Button/Button";
import Slider from '@mui/material/Slider';
import { useContext } from "react"
import { AppContext } from "../../context/GlobalContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContentParameters = ({title}) => {
    const {passwordLength, setPasswordLength, createPassword} = useContext(AppContext);
    const notifyGeneratePassWord = () => toast.success("Password Generated",{
        closeOnClick: true,
        autoClose: 2500,
        theme:'dark',
    });
    const generatePassword = ()=>{
        createPassword();
        notifyGeneratePassWord();
    }
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
            <Button generatePassword={generatePassword}/> {/* onclick function passed in as prop */}
            <ToastContainer 
                    newestOnTop 
                    progressClassName="toast-progress"
                    toastClassName='toast-style'
                    bodyClassName="toast-body"
                    colorSuccess= "#a3ffae"
                    icon = {
                        <img 
                            className="toast-icon"
                            src={require("../../assets/icon-copy.svg").default} 
                            alt="copy icon image"
                        />
                    }
                />
        </section>
    )
}
export default ContentParameters