import React from 'react';
import './Product.css';

const Product = (props) => {
  const { name, price, description, category } = props.product;
  return (
    <>
      <img
        src='https://james-hare.com/images/imagenotfound.jpg'
        alt='image not found'
      />
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
    </>
  );
};

export default Product;
