import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({ searchValue, productList }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchValue) {
      setProducts(
        productList
          .filter((x) => {
            return x.name.toLowerCase().includes(searchValue);
          })
          .map((product) => {
            return <Product key={product.product_id} product={product} />;
          })
      );
    } else {
      setProducts(
        productList.map((product) => {
          return <Product key={product.product_id} product={product} />;
        })
      );
    }
  }, [productList, searchValue]);

  return <section className='products'>{products}</section>;
};

export default ProductList;
