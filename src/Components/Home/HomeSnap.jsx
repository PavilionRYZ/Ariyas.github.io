import React from 'react'
import './CardStyles.css';

const HomeSnap = () => {
  return (
    <>
      {/* Home snap basically is a summary of the entire home page -> a semi footer */}
      <div className="home-snap-container">
        <div className="image-snap-container">
          <div className="snap-title">
            <h2>Explore more</h2>
            <h4>Explore our diverse collection of products</h4>
            <p>Fetch the best deals according to your liking. <br />The products are all Swadeshi and it encourages our local vendors and also showcases their skills and abilities</p>
            <div className="btn-snap-section">
              <button>Bags</button>
              <button>Sarees</button>
              <button>Wooden</button>
              <button>Clay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSnap;