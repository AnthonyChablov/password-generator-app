import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const CustomCheckbox = ({description, defaultChecked, handleChange}) => {
    return (
        <div className="checkbox">
            <FormControlLabel 
            className='checkbox__label'
                control = {
                    <Checkbox 
                        className='checkbox__content' 
                        disableRipple={true} 
                        defaultChecked={defaultChecked}
                        onChange={handleChange}
                    />
                }
                label={description} 
                sx={{
                    fontFamily:'Jet-Brains-Mono-Bold'
                }}
            />
        </div>
    ); 
}
export default CustomCheckbox;