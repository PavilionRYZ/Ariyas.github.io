/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../../Components/Layout/Layout'
import './SaleStyle.css';
import SaleView from './Cards/SaleView';
import SaleCardView from './Cards/SaleCardView';
import SaleGift from './SaleGift';
import SaleSnap from './SaleSnap';

const Sale = () => {
  return (
    <Layout title="Grab the best deals">
      <div className="sale-container">
        <h1 className="sale-h1">Sale</h1>
        <div className="sales-view">
          <SaleView />
        </div>
        <div className="sale-view-offer">
          <SaleCardView />
        </div>
      </div>



      <div className="gift-container">
        <SaleGift />
      </div>

      <div className="sale-snap">
        <SaleSnap />
      </div>
    </Layout>
  )
}

export default Sale