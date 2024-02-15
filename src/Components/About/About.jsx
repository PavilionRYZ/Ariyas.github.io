/* eslint-disable no-unused-vars */
import React from "react"
import "./AboutStyles.css"
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ariyas"}>
      <div className="div-elementor">
        <div className="recycled-shoe-store-wrapper">
          <div className="recycled-shoe-store"></div>
        </div>
        <div className="div">
          <div className="heading">
            <div className="text-wrapper">ABOUT US</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Welcome to Ariyas</div>
          </div>
          <div className="div-elementor-text">
            <p className="at-ariyas-we-take">
              At Ariyas, we take pride in showcasing the unique products and
              <br />
              foods that make each place special. Our platform connects local
              <br />
              sellers with buyers, promoting local entrepreneurship and
              <br />
              preserving local culture. Discover local treasures, only at
              Ariyas.
            </p>
          </div>
          <button className="div-elementor-button">
            <div className="link">
              <div className="text-wrapper-3">READ MORE</div>
            </div>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default About
