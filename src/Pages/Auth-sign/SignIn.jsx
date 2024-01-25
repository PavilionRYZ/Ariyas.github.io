import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout2 from './../../Components/Layout/Layout2';

const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    // preventDefault() -> stops the default behavior of javascript
    e.preventDefault();
  }

  return (
    <Layout2 title={"Ariyas - Log in"}>
      <div className="login-container">
        <div className="login-div-container">
          <div className="login-form">
            <h1>Welcome Back</h1>
            <p>Buy & Sell today, tomorrow and beyond <span>Empower your local Artisans</span></p>
            <form onSubmit={loginSubmit}>
              <div className="email-section">
                <label>Email*</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              <div className="password-section">
                <label>Password*</label>
                <input
                  type="password"
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                />
              </div>
              <div className="submit-btn">
                <button><Link to="/">Submit</Link></button>
              </div>
            </form>
          </div>
        </div>


        <div className="login-img-container">

        </div>

      </div>
    </Layout2>
  )
}

export default SignIn