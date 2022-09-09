import { useContext } from "react"
import { AppContext } from "../../context/GlobalContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContentDisplay = () => {
    const {password} = useContext(AppContext);
    const copyClipboard = () => {navigator.clipboard.writeText(password)}
    const notify = () => toast.success("Copied to Clipboard",{
        closeOnClick: true,
        autoClose: 2500,
        theme:'dark',
    });
    const clickHandeler =()=>{
        copyClipboard();
        notify();
    }
    return (
        <section className="content-display">
            <div className="content-display__generated-text">
                {password}
            </div>
            <div className="content-display__copy-icon" 
                onClick={clickHandeler}>
                
                <img 
                    className="copy-icon"
                    src={require("../../assets/icon-copy.svg").default} 
                    alt="copy icon image"
                />
            </div>
        </section>
    )
}

export default ContentDisplay