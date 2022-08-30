import Slider from "../Slider/Slider";

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
        </section>
    )
}

export default ContentParameters