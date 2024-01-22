import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import '../styles/PagesStyles.css';
// import MainBg from '../images/bg-images/AdobeStock_627487361_Preview.jpeg';
import { Link } from 'react-router-dom';

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
        </div>
      </div>

    </Layout>
  )
}

export default Home