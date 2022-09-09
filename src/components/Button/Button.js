const Button = ({generatePassword}) => {
    return (
        <div onClick={generatePassword} className="button">
            {/* Dynamically insert state */}
            <div className="button__text">
                Generate
            </div>
            <div className="button__img">
                <img 
                    src={require("../../assets/icon-arrow-right.svg").default} 
                    alt="img">
                </img>
            </div>
            
        </div>
    )
}

export default Button