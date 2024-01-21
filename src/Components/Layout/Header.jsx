import React from 'react';
import logo from '../../images/logo-white-removebg-preview.png';
import search from '../../images/dearch.png';
import cart from '../../images/cart.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <NavLink to="/" ><img src={logo} alt="logo" style={{ filter: "invert(60)", width: "70px", height: "55px", display: "flex", alignItems: "center", margin: "1rem" }} /></NavLink>
        </div>
        <div className="list-content">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sale">Sale</NavLink></li>
            <li><NavLink to="shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
          </ul>
        </div>
        <div className="auth-cart">
          <div className="icons-nav">
            <NavLink><img src={search} alt="search" style={{ width: "50px", height: "40px" }} /></NavLink>
            <NavLink><img src={cart} alt="cart" style={{ width: "45px", height: "35px", transform: "scaleX(-1)" }} /></NavLink>
          </div>
          <div className="log-sign">
            <button><NavLink to="register">Sign up</NavLink></button>
            <button><NavLink to="log-in">Log in</NavLink></button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;