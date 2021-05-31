import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/products/${product.product_id}`);
  };

  const { name, price, url } = product;
  return (
    <div className='product' onClick={handleClick}>
      <img src={url} alt={name} />
      <div>
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
