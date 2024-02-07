import React, { useState } from "react"
import "./Contactstyle.css"
import Layout from "../../Components/Layout/Layout"

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted:", {
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    })
  }

  return (
    <Layout title={"Ariyas - Contact us"}>
      <div className="mainbox">
        <div className="contact-box">
          <div className="contact-left">
            <h1> Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="firstName">First Name </label>

                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">Last Name </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-row2">
                <div className="input-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <br />

                <div className="input-group">
                  <label htmlFor="email">Email </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <label htmlFor="message">Message </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact