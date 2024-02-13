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
                Empower&nbsp;&nbsp; Local Artician's
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
