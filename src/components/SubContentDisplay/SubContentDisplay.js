import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
const Strength = () => {
    const { passwordStrengthName } = useContext(AppContext);
    return (
        <div className="sub-content-display">
            <p className="sub-content-display__title">
                Strength
            </p>
            <div className="sub-content-display__info">
                <p className="info__status">
                    {passwordStrengthName}
                </p>
                <div className="info__strength-bar">
                    <div className={`bar ${passwordStrengthName === 'STRONG' && 'strong'} ${passwordStrengthName === 'MEDIUM' && 'medium'} ${passwordStrengthName === 'WEAK' && 'weak'} ${passwordStrengthName === 'TOO WEAK!' && 'too-weak'}`}></div>
                    <div className={`bar ${passwordStrengthName === 'STRONG' && 'strong'} ${passwordStrengthName === 'MEDIUM' && 'medium'} ${passwordStrengthName === 'WEAK' && 'weak'}`}></div>
                    <div className={`bar ${passwordStrengthName === 'STRONG' && 'strong'} ${passwordStrengthName === 'MEDIUM' && 'medium'}`}></div>
                    <div className={`bar ${passwordStrengthName === 'STRONG' && 'strong'} `}></div>
                </div>
            </div>
        </div>
    )
}

export default Strength