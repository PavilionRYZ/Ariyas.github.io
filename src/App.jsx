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


    </>
  )
}

export default App
