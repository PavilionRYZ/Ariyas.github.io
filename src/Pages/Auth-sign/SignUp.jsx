import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Layout2 from './../../Components/Layout/Layout2';

const SignUp = () => {


  // Use of the hooks forr the register page
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [finalPassword, setFinalPassword] = useState("");

  // Form submit function
  const submitHandler = async (e) => {
    // This stops the default behavior of javascript such as refreshed the website when we try to submit the form
    e.preventDefault();

  }
  return (
    <>
      <Layout2 title={"Sign up - Avail all the best offers"}>
        <div className="register-container">
          <div className="form-container">

            {/* Form Section */}
            <form className="form-mediator" onSubmit={submitHandler}>
              <div className="form-heading">
                <h1>Sign Up to Discover Local Treasures</h1>
              </div>
              <div className="para-content">
                <p>Buy & Sell today, tomorrow and beyond <span>Empower Local Artisans</span></p>
              </div>
              <div className="input-field-name">
                <div className="first-name">
                  <label>First Name*</label>
                  <input
                    type='text'
                    placeholder='Enter first name'
                    className="input-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="last-name">
                  <label>Last Name*</label>
                  <input
                    type='text'
                    placeholder='Enter last name'
                    className="input-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="email-section">
                <label>Email Address*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required

                />
              </div>
              <div className="phone-section">
                <label>Phone Number*</label>
                <div className="divider-phone">
                  <input
                    type=""
                    id="countryCode"
                    name="countryCode"
                    value="+91"
                    readOnly

                  />
                  <input
                    type="text"
                    placeholder='12345 67890'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="password-section">
                <label>Enter Password*</label>
                <div className="init-con-pass">
                  <input
                    type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder='Enter Password'
                    value={finalPassword}
                    onChange={(e) => setFinalPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="submit-btn">
                <button><Link to="/log-in">Submit</Link></button>
              </div>
            </form>
          </div>

          <div className="static-img-container">
            {/* Image will be applied here for the right side as a background */}
          </div>
        </div>
      </Layout2>
    </>
  )
}

export default SignUp