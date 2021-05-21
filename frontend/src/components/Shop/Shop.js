import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import SearchBar from '../SearchBar/SearchBar';
import './Shop.css';

const Shop = () => {
  // const [category, setCategory] = useState('');
  return (
    <>
      <SearchBar />
      <div className='categories'>
        <Link to='/shop/hats'>Hats</Link>
        <Link to='/shop/shirts'>Shirts</Link>
        <Link to='/shop/jackets'>Jackets</Link>
        <Link to='/shop/socks'>Socks</Link>
        <Link to='/shop/limited'>Limited Drops</Link>
        <Link to='/shop/misc'>Misc</Link>
      </div>
      <ProductList />
    </>
  );
};

export default Shop;
