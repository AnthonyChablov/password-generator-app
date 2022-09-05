import {useContext} from 'react';
const ContentDisplay = () => {
    const {username} = useContext(AppContext);
    return (
        <section className="content-display">
            <div className="content-display__generated-text">
                {username}
            </div>
            <div className="content-display__copy-icon">
                <img 
                    src={require("../../assets/icon-copy.svg").default} 
                    alt="img"
                />
            </div>
        </section>
    )
}

export default ContentDisplay