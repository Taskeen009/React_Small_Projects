import Accordian from './components';
import './components/style.css';
import './components/random-color'
import Random from './components/random-color';
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <Random/> */}


      {/* Star Rating */}
      {/* <StarRating noOfStars={8}/> */}

      {/* Image Slider */}
      <ImageSlider url={'https://picsum.photos/v2/list'} Limit={"10"} page={"1"}/>
    </div>
  );
}

export default App;
