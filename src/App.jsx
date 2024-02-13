<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Sale from './Components/Sale/Sale';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';
import About from './Pages/About';
import SignUp from './Pages/Auth-sign/SignUp';
import SignIn from './Pages/Auth-sign/Sign-in/SignIn';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';
import Search from './Pages/Subpages/Search';
function App() {


=======
import { Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import Contact from "./Pages/Contact/Contact"
import About from "./Pages/About/About"
import PageNotFound from "./Pages/PageNotFound"
import "./App.css"

import { ToastContainer } from "react-toastify"
import Cart from "./Pages/Cart"
import SignUp from "./Pages/Auth-sign/SignUp"
import SignIn from "./Pages/Auth-sign/SignIn/SignIn"
import Home from "./Components/Home/Home"
import Sale from "./Pages/Sale/Sale"
function App() {
>>>>>>> 85d358103be29249871238ce543f171c5e02c0ac
  return (
    <>
      {/* Routes for the pages */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <RouterProvider router={router} /> */}

<<<<<<< HEAD

=======
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
>>>>>>> 85d358103be29249871238ce543f171c5e02c0ac
    </>
  )
}

export default App
