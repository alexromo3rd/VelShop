import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/api/products/${product.product_id}`);
  };

  const { name, price } = product;
  return (
    <div className='product' onClick={handleClick}>
      <img
        src='https://james-hare.com/images/imagenotfound.jpg'
        alt='not found'
      />
      <div>
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
