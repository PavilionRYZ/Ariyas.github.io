import React from 'react';
import Saree from '../../../images/product_images/saree.avif';
import Jewellery from '../../../images/product_images/jewellery.jpg';
import Bags from '../../../images/product_images/bags.jpg';
import { Link } from 'react-router-dom';


const CardSales1 = () => {
  return (
    <>
    {/* The same CardSales.jsx without the pricing and the add to cart option */}
      <div className="details-container spacing-container">
        <div className="details">
          <div className='img-detail'>
            <Link to="/shop">
              <img src={Saree} alt="saree image" />
            </Link>
          </div>
        </div>
        <div className="details">
          <div className='img-detail'>
            <Link to="/shop">
              <img src={Jewellery} alt="jewellery" />
            </Link>
          </div>
        </div>
        <div className="details">
          <div className='img-detail'>
            <Link to="/shop">
              <img src={Bags} alt="bags" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardSales1