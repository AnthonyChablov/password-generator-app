import Slider from "../Slider/Slider";
import CheckboxParameters from "../CheckboxParameters/CheckboxParameters";
import SubContentDisplay from '../SubContentDisplay/SubContentDisplay';
import Button from "../Button/Button";

const ContentParameters = () => {
    return (
        <section className='content-parameters'>
            <div className="content-parameters__content-header">
                <div className="content-header__description">
                    Character Length
                </div>
                <div className="content-header__output">
                    10
                </div>
            </div>
            <Slider/>
            <CheckboxParameters/>
            <SubContentDisplay/>
            <Button/>
        </section>
    )
}

export default ContentParameters