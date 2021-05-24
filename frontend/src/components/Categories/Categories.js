import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
    <>
      <div className='categories'>
        <Link to='/shop'>All</Link>
        <Link to='/shop/Hats'>Hats</Link>
        <Link to='/shop/Shirts'>Shirts</Link>
        <Link to='/shop/Jackets'>Jackets</Link>
        <Link to='/shop/Socks'>Socks</Link>
        <Link to='/shop/Limited'>Limited Drops</Link>
        <Link to='/shop/Misc'>Misc</Link>
      </div>
      <hr />
    </>
  );
};

export default Categories;
