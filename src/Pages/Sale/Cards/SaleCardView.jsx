import React from 'react'
import { Link } from 'react-router-dom';
import Saree from '../../../images/product_images/saree1.avif';
import Jewellery from '../../../images/product_images/jewellery.jpg';
import Bags from '../../../images/product_images/bag1.jpg';
import '../../../Components/Home/CardStyles.css';

const SaleCardView = () => {
  return (
    <>
      <div className="sales-card-view">
        <div className="sales-title-section">
          <h1>Sales</h1>
          <p><Link to="/sale" className='sellers-link'>VIEW ALL BEST SELLERS</Link></p>
        </div>
        <div className="details-container">
          <div className="details">
            <div className='img-detail'>
              <img src={Saree} alt="saree image" />
            </div>
            <div className="sales-title">
              <h1><Link to="/sale" className="sale-title-links">Sarees</Link></h1>
              <p>&#x20B9;1699.00   (<span className="discount-sale">30% off</span>)</p>
            </div>
          </div>
          <div className="details">
            <div className='img-detail'>
              <img src={Jewellery} alt="jewellery" />
            </div>
            <div className="sales-title">
              <h1><Link to="/sale" className="sale-title-links">Colourful beeds and seed Jewellery</Link></h1>
              <p>&#x20B9;5000.00   (<span className="discount-sale">20% off</span>)</p>
            </div>
          </div>
          <div className="details">
            <div className='img-detail'>
              <img src={Bags} alt="bags" />
            </div>
            <div className="sales-title">
              <h1><Link to="/sale" className="sale-title-links">Hand-made leather bags</Link></h1>
              <p>&#x20B9;1200.00   (<span className="discount-sale">40% off</span>)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaleCardView