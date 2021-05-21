import React from 'react';
import './Product.css';

const Product = (props) => {
  const { name, price } = props.product;
  return (
    <div className='product'>
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
