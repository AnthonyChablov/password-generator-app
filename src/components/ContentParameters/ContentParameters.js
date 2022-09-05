import CheckboxParameters from "../CheckboxParameters/CheckboxParameters";
import SubContentDisplay from '../SubContentDisplay/SubContentDisplay';
import Button from "../Button/Button";
import Slider from '@mui/material/Slider';

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
            <Slider
                className="content-parameters__slider"
                marks={false}
                defaultValue={10}
                min={0}
                max={20}
                valueLabelDisplay='off'
            />
            <CheckboxParameters/>
            <SubContentDisplay/>
            <Button/>
        </section>
    )
}

export default ContentParameters