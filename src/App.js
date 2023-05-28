import "./App.css";
import image from "./assets/images/image1.jpeg";
function App() {
  return (
    <>
      <div className="main">
        <div className="style">
          <h1>Maryam's Bakery</h1>
          <h4>The taste of home-baked goodness</h4>
        </div>
        <img src={image}></img>
      </div>
    </>
  );
}

export default App;
