import React from 'react';
import { Link } from 'react-router-dom';
import Bags from '../../images/product_images/bag1.jpg';
import SareesPro from '../../images/product_images/saree1.avif';
import WoodenCraft from '../../images/product_images/wooden_craft.avif';
import ClayProducts from '../../images/product_images/clay_products.avif';

const ProductSection = () => {
  return (
    <>
      <div>
        <div id="product-details">
          <div className="products-section">
            <div className="products-list">
              <div className="goods">
                <img src={Bags} alt="Products" />
                <div className="layer">
                  <h2>Bags</h2>
                  <button className="btn-products-goods"><Link to="/cart" className="goods-btn">Buy now</Link></button>
                </div>
              </div>
              <div className="goods">
                <img src={SareesPro} alt="Products" />
                <div className="layer">
                  <h2>Sarees</h2>
                  <button className="btn-products-goods"><Link to="/cart" className="goods-btn">Buy now</Link></button>
                </div>
              </div>
              <div className="goods">
                <img src={WoodenCraft} alt="Products" />
                <div className="layer">
                  <h2>Wooden Crafts</h2>
                  <button className="btn-products-goods"><Link to="/cart" className="goods-btn">Buy now</Link></button>
                </div>
              </div>
              <div className="goods">
                <img src={ClayProducts} alt="Products" />
                <div className="layer">
                  <h2>Clay Products</h2>
                  <button className="btn-products-goods"><Link to="/cart" className="goods-btn">Buy now</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSection;