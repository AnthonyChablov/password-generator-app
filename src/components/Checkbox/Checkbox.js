
const Checkbox = () => {
    return (  
        <div className="checkbox">
            <label class="checkbox__label">
                <input className="checkbox__input" type="checkbox" name="checkbox" />
                <span className='checkbox__text'>
                    Include Uppercase Letters
                </span>
            </label>
        </div>
        
    ) 
}

export default Checkbox