import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';
import './App.css';

import { ToastContainer } from 'react-toastify';
import Cart from './Pages/Cart';
import SignUp from './Pages/Auth-sign/SignUp';
import SignIn from './Pages/Auth-sign/SignIn';
import Home from './Components/Home/Home';
import Sale from './Pages/Sale/Sale';
function App() {

  return (
    <>
      {/* Routes for the pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<SignUp />} />
        <Route path="/log-in" element={<SignIn />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  )
}

export default App
