/* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import Layout2 from './../../Components/Layout/Layout2';

// const SignIn = () => {

//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const loginSubmit = (e) => {
//     // preventDefault() -> stops the default behavior of javascript
//     e.preventDefault();
//   }

//   return (
//     <Layout2 title={"Ariyas - Log in"}>
//       <div className="login-container">
//         <div className="login-div-container">
//           <div className="login-form">
//             <h1>Welcome Back</h1>
//             <p>Buy & Sell today, tomorrow and beyond <span>Empower your local Artisans</span></p>
//             <form onSubmit={loginSubmit}>
//               <div className="email-section">
//                 <label>Email*</label>
//                 <input
//                   type="email"
//                   placeholder="Enter email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}

//                 />
//               </div>
//               <div className="password-section">
//                 <label>Password*</label>
//                 <input
//                   type="password"
//                   placeholder='Enter Password'
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}

//                 />
//               </div>
//               <div className="submit-btn">
//                 <button><Link to="/">Submit</Link></button>
//               </div>
//             </form>
//           </div>
//         </div>


//         <div className="login-img-container">

//         </div>

//       </div>
//     </Layout2>
//   )
// }

// export default SignIn

import React, { useState } from "react"

import { Link } from "react-router-dom"
import "./SignInStyles.css"
import Layout2 from "../../../Components/Layout/Layout2"

const SignIn = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginSubmit = (e) => {
    // preventDefault() -> stops the default behavior of javascript
    e.preventDefault()
  }

  return (
    <Layout2 title={"Ariyas - Log in"}>
      <div className="login-container">
        <div className="login-div-container">
          <div className="welcomeback"> Welcome Back </div>
          <div className="frame-frame">
            <p className="p">
              <span className="span">
                Buy &amp; Sell today, tomorrow and beyond
              </span>
              <span className="text-wrapper-2">.</span>
              <span className="text-wrapper-3">&nbsp;</span>

              <span className="text-wrapper-4">
                Empower&nbsp;&nbsp; Local Artisans
              </span>
            </p>
          </div>

          <div className="login-form">
            <form onSubmit={loginSubmit}>
              <div className="email-section">
                <label className="inputfield">Email Address*</label>
                <input
                  className="inputfield-frame"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password-section">
                <label className=" inputfield">Password*</label>
                <input
                  className="inputfield-frame"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="sign-btn">
            <button>
              <Link to="/">Sign in</Link>
            </button>
          </div>
        </div>

        <div className="login-right">
          <div className="overlap">
            <img
              src="./src/images/bg-images/AdobeStock_33529904_Preview.jpeg"
              alt="Login"
              className="login"
            />

            <img
              src="./src/images/bg-images/AdobeStock_549310892_Preview.jpeg"
              alt="Adobestock"
              className="adobestock"
            />
          </div>
        </div>
      </div>
    </Layout2>
  )
}

export default SignIn