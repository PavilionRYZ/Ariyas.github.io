/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CardProducts = () => {

  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const result = await axios.get(`${import.meta.env.REACT_API_PORT}/api/v1/products`, {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //     setProducts(result);
    //     console.log(result);
    //   } catch (error) {
    //     setError(error.message);
    //   }
    // };

    // fetchData();
    fetchProductData();
  }, []);

  const fetchProductData = () => {
    fetch(`${import.meta.env.REACT_API_PORT}/api/v1/products`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProductData(data); // Store the data in state
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!products.length) {
  //   return <div>Loading...</div>;
  // }

  return (

    <div className="card-details-shop">
      <div className="card-det">
        {
          productData ? (
            <>
              <ul>
                {
                  productData.map(productData => (
                    <li key={productData._id}>
                      <Link to={`/shop/${productData._id}`}>
                        <div className="img-det">
                          <img src={productData.image[0].url} alt="productData.name" />
                        </div>
                        <div className="card-title-det">
                          <h2>{productData.name}</h2>
                          <p>&#8377; {productData.price}</p>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </>
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
    </div>

  );

}

export default CardProducts;