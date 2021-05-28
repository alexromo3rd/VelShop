import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({ list }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('render');
    setProducts(
      list.map((product) => {
        return <Product key={product.product_id} product={product} />;
      })
    );
  }, [list]);

  return <section className='products'>{products}</section>;
};

export default ProductList;
