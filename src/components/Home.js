import image from "../assets/images/image1.jpeg";
const Home = () => {
  return (
    <div className="style">
      <h1>Maryam's Bakery</h1>
      <h3>The taste of home-baked goodness</h3>
      <img src={image} />
    </div>
  );
};

export default Home;
