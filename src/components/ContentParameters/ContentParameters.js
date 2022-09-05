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
                sx={{
                    width: '100%',
                    height:'0.4em',
                    color: '#a3ffae',
                    '& .MuiSlider-thumb': {
                        color: '#e7e6eb',
                        outlineStyle:'solid',
                        outlineWidth:'.13em',
                        boxShadow:"none",
                        outlineColor:'#e7e6eb',  
                    },
                    '& .MuiSlider-thumb:hover': {
                        color: 'black',
                        outlineColor: '#a3ffae',
                        boxShadow: 'none'
                    },
                    '& .MuiSlider-rail': {
                        color: 'black',
                        backgroundColor:'black',
                        height:'0.6em',    
                        boxShadow: 'none'                  
                    }
                }}
            />
            <CheckboxParameters/>
            <SubContentDisplay/>
            <Button/>
        </section>
    )
}

export default ContentParameters