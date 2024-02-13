import React from 'react'
import '../SaleCardStyle.css';

const SaleView = () => {
  return (
    <>
      <div className="sale-view-container">
        <div className="sale-division">
          <div id="sale-div-img1">
            <div className="sale-title-div">
              <p>New Customer Offer</p>
              <h2>Get 10% off</h2>
              <button className="btn-div-sale">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="sale-division">
          <div id="sale-div-img2">
            <div className="sale-title-div">
              <p>Festive Offer</p>
              <h2>Flat 20% off</h2>
              <button className="btn-div-sale">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaleView;