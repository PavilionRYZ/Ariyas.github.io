/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from './../Layout/Layout';
import './ShopStyle.css';
import ShopCards from './Shop-Cards/ShopCards';

const Shop = () => {
  return (
    <Layout title={"Shop now | Get amazing offers!!"}>
      <div className="shop-container">
        <h2>Shop</h2>
        <main className="items-container">

          <ShopCards />
        </main>
      </div>
    </Layout>
  )
}

export default Shop;