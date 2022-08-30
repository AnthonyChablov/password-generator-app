const Slider = () => {
  return (
    <div className="slider-wrapper">
        <input 
          className="slider" 
          id="myRange" 
          type="range" 
          min="1" 
          max="100" 
          defaultValue="50"
        >  
        </input>
    </div>
  )
}

export default Slider