import React, { useState, useEffect, useRef } from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({ list }) => {
  const [products, setProducts] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      generateProductList();
    }
  }, [list]);

  const generateProductList = () => {
    setProducts(
      list.map((product) => {
        return <Product key={product.product_id} product={product} />;
      })
    );
  };

  return <section className='products'>{products}</section>;
};

export default ProductList;
