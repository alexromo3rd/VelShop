import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import './SearchBar.css';

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <section className='search-container'>
      <FormInput
        name='searchValue'
        type='text'
        placeholder='Search for a product...'
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className='input'
      />
      <Link to='/cart' className='inline-link'>
        <i className='fas fa-shopping-cart'></i>
      </Link>
    </section>
  );
};

export default SearchBar;
