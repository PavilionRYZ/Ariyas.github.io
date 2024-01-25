import React from 'react'
import './HomeStyle.css';
// import MainBg from '../images/bg-images/AdobeStock_627487361_Preview.jpeg';
import { Link } from 'react-router-dom';
import CardSales from '../Home/Cards/CardSales';
import HomeSnap from '../Home/HomeSnap';
import CardSales1 from '../Home/Cards/CardSales1';
import CardProducts from '../Home/Cards/CardProducts';
import ProductSection from '../Home/Cards/ProductSection';
import Layout from './../Layout/Layout';

const Home = () => {
  // const images = [
  //   '../images/bg-images/AdobeStock_627487361_Preview.jpeg',
  //   '../images/bg-images/AdobeStock_596562754_Preview.jpeg',
  //   '../images/bg-images/AdobeStock_248454352_Preview.jpeg',
  //   '../images/bg-images/AdobeStock_296165255_Preview.jpeg'
  // ]
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex((currentImageIndex + 1) % images.length);
  //   }, 5000); // Change image every 5 seconds

  //   return () => clearInterval(intervalId);
  // }, [currentImageIndex]);

  // const heroStyle = {
  //   backgroundImage: `url(${images[currentImageIndex]})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  // };
  return (
    <Layout>
      <div className="container">
        <div className="main-container">
          <div className="title-container">
            <h1 >Ariyas - <br />Discover Local <br /> Treasures</h1>
            <p>Ecommerce that feels like home. <br /><span>Buy and sell GI tagged products</span></p>
            <button className="btn-shop">
              <Link to="/shop" style={{
                textDecoration: "none",
                color: "black",
              }}
              >Shop now</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Sales Section */}
      <div className="sales-container">
        <div className="sales-section">
          <div className="sales-title-section">
            <h1>Sales</h1>
            <p><Link to="/sale" className='sellers-link'>VIEW ALL BEST SELLERS</Link></p>
          </div>
          <div className="sales-ad-section">
            <CardSales />
          </div>
        </div>
      </div>


      {/* Product Section */}
      <div className="product-container">
        <ProductSection />
      </div>

      {/* Repeatation of the same sales code but just a bit modified based on the requirement */}
      <div className="sales-container">
        <div className="sales-section">
          <div className="sales-title-section">
            <h1>New Arrivals</h1>
            <p><Link to="/sale" className='sellers-link'>VIEW ALL BEST SELLERS</Link></p>
          </div>
          <div className="sales-ad-section">
            <CardSales1 />
          </div>
        </div>
      </div>

      {/* Products Card Details Section */}

      <div className="product-card-container">
        <CardProducts />
      </div>

      {/* The entire summarized snapshot of home page */}
      <div className="home-snapshot-section">
        <HomeSnap />
      </div>

    </Layout>
  )
}

export default Home