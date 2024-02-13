import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/products');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}