import Accordian from './components';
import './components/style.css';
import './components/random-color'
import Random from './components/random-color';
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadData from './components/load-more-button'
import Tree from './components/tree-view'
import menus from './components/tree-view/data';
import Qrcode from './components/qr-code';
function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <Random/> */}


      {/* Star Rating */}
      {/* <StarRating noOfStars={8}/> */}

      {/* Image Slider */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} Limit={"10"} page={"1"}/> */}

      {/* Load More Products */}
      {/* <LoadData/> */}


      {/* TreeView */}
      {/* <Tree menus={menus}/> */}


      {/* QRcode  */}
      <Qrcode/>
    </div>
  );
}

export default App;
