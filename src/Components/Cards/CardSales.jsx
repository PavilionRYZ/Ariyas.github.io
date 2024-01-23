import React from 'react';
import '../../styles/CardStyles.css';
import Saree from '../../images/product_images/saree.avif';
import Jewellery from '../../images/product_images/jewellery.jpg';
import Bags from '../../images/product_images/bags.jpg'; import { Link } from 'react-router-dom';
<Link></Link>

// const width = 400;
// const height = 500;
// const api_key = 'DJTLzIra8RANQuJvwC9xNeQiu9j1OvQ_v3A4EQz03ZI';

// const imageUrl = `https://api.unsplash.com/photos/random?client_id=${api_key}`;

const CardSales = () => {

  // const [imageUrt, setImageUrl] = useState();

  // useEffect(() => {
  //   fetch(imageUrl)
  //     .then(response => response.json())
  //     .then(data => setImageUrl(data.urls.regular))
  //     .catch(error => console.log(error));
  // }, []);

  // const cardStyle = {
  //   backgroundImage: `url(${imageUrl})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  // }


  return (
    <>
      <div className="details-container">
        <div className="details">
          <div className='img-detail'>
            <img src={Saree} alt="saree image" />
          </div>
          <div className="sales-title">
            <h1><Link to="/sale" className="sale-title-links">Sarees</Link></h1>
            <p>&#x20B9;1699.00   (<span className="discount-sale">30% off</span>)</p>
            <button className="btn-cart"><Link to="/cart" className="cart-style">Add to Cart</Link></button>
          </div>
        </div>
        <div className="details">
          <div className='img-detail'>
            <img src={Jewellery} alt="jewellery" />
          </div>
          <div className="sales-title">
            <h1><Link to="/sale" className="sale-title-links">Colourful beeds and seed Jewellery</Link></h1>
            <p>&#x20B9;5000.00   (<span className="discount-sale">20% off</span>)</p>
            <button className="btn-cart"><Link to="/cart" className="cart-style">Add to Cart</Link></button>
          </div>
        </div>
        <div className="details">
          <div className='img-detail'>
            <img src={Bags} alt="bags" />
          </div>
          <div className="sales-title">
            <h1><Link to="/sale" className="sale-title-links">Hand-made leather bags</Link></h1>
            <p>&#x20B9;1200.00   (<span className="discount-sale">40% off</span>)</p>
            <button className="btn-cart"><Link to="/cart" className="cart-style">Add to Cart</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardSales