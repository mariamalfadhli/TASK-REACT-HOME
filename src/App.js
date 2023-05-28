import "./App.css";
import image from "./assets/images/image1.jpeg";
import products from "./products";
function App() {
  const productList = products.map((product) => {
    return (
      <div className="main">
        <img src={product.image} className="iamgeStyle" />
        <h1>
          {product.name}: {product.price}
        </h1>
      </div>
    );
  });
  return (
    <>
      <div className="main">
        <div className="style">
          <h1>Maryam's Bakery</h1>
          <h3>The taste of home-baked goodness</h3>
          <img src={image}></img>

          {productList}
        </div>
      </div>
    </>
  );
}

export default App;
