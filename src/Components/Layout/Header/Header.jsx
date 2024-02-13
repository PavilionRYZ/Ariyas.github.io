/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../images/logo-white-removebg-preview.png';
import search from '../../../images/dearch.png';
import cart from '../../../images/cart.png';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <div id="nav-container">
        <nav>

          <div className="logo">
            <NavLink to="/" ><img src={logo} alt="logo" style={{ filter: "invert(60)", width: "70px", height: "55px", display: "flex", alignItems: "center", margin: "1rem" }} /></NavLink>
          </div>
          <div className="list-content">
            <ul>
              <li onClick={() => navigate('/')} className="nav-links">Home</li>
              <li onClick={() => navigate('/sale')} className="nav-links">Sale</li>
              <li onClick={() => navigate('/shop')} className="nav-links">Shop</li>
              <li onClick={() => navigate('/contact')} className="nav-links">Contact</li>
              <li onClick={() => navigate('/about')} className="nav-links">About</li>

              {/* <li><NavLink to="shop" className="nav-links">Shop</NavLink></li>
              <li><NavLink to="/contact" className="nav-links">Contact</NavLink></li>
              <li><NavLink to="about" className="nav-links">About</NavLink></li> */}
            </ul>
          </div>
          <div className="auth-cart">
            <div className="icons-nav">
              <ul>
                <li onClick={() => navigate('/search')}><img src={search} alt="search" style={{ width: "50px", height: "40px" }} /></li>
                <li onClick={() => navigate('/cart')}><img src={cart} alt="cart" style={{ width: "45px", height: "35px", transform: "scaleX(-1)" }} /></li>
              </ul>
            </div>
            <div className="log-sign">
              <button onClick={() => navigate('/signup')} className="btnAuth">Sign Up</button>
              <button onClick={() => navigate('/login')} className="btnAuth">Login</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}


export default Header;