/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// // Define the API endpoint as a constant
const API_ENDPOINT = 'http://localhost:5000';

const CardProducts = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${API_ENDPOINT}/api/v1/products`);
        setProducts(result);
        console.log(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-details-shop">
      <div className="card-det">
        {products.map((product) => (
          <div className="card-det-list" key={product._id}>
            <Link to={`/shop/${product._id}`} style={{ textDecoration: "none", color: "black" }}>
              <div className="img-det">
                <img src={product.image[0].url} alt={product.name} />
              </div>
              <div className="card-title-det">
                <h2>{product.name}</h2>
                <p>&#8377;{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProducts;