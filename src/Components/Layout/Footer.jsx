import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logistics">
          <div className="secure-pay">
            <i className="fa-solid fa-credit-card"></i>
            <h3>Secure Payment</h3>
          </div>
          <div>|</div>
          <div className="express-ship">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Express Shipping</h3>
          </div>
          <div>|</div>
          <div className="return-free">
            <i className="fa-solid fa-rotate-left"></i>
            <h3>Free Return</h3>
          </div>
        </div>
        <div className="divider-footer"></div>

        <div className="ariyas-about-shop">

          <div className="ariyas-details">
            <h2>Ariyas</h2>
            <div className="ariyas-text">
              <p>Ecommerce that feels like home</p>
            </div>
            <div className="ariyas-address">
              <p>Manisha Apt., Jai Ambe Mandir Marg, <br />Liberty Garden, Malad (west)</p>
              <p>Maharashtra</p>
              <p>zachariah.rosey@rediffmail.com</p>
            </div>
          </div>

          <div className="ariyas-shop">
            <h2>Shop</h2>
            <div className="ariyas-address">
              <p>Dress</p>
              <p>Handmade Trinkets</p>
              <p>Bags</p>
            </div>
          </div>

          <div className="ariyas-about">
            <h2>About</h2>
            <div className="ariyas-address">
              <p>Home</p>
              <p>Contact</p>
              <p>Become a Seller</p>
            </div>
          </div>

          <div className="need-help">
            <h2>Need Help?</h2>
            <div className="ariyas-address">
              <p>Home</p>
              <p>Contact</p>
              <p>Become a Seller</p>
            </div>

          </div>
        </div>


        <div className="ariyas-links">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
        </div>

      </div>

      <div className="footer-payment">
        <i className="fa-brands fa-cc-stripe"></i>
        <i className="fa-brands fa-cc-paypal"></i>
        <i className="fa-brands fa-cc-visa"></i>
        <i className="fa-brands fa-cc-mastercard"></i>
      </div>

    </>

  )
}

export default Footer;