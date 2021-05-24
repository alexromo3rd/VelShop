import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SearchBar.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const submit = () => {
    console.log(`Search Value: ${searchValue}`);
    setSearchValue('');
  };
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
      <Button styleName='submit search' label='Search' handleClick={submit} />
      <Link to='/cart' className='inline-link'>
        <i className='fas fa-shopping-cart'></i>
      </Link>
    </section>
  );
};

export default SearchBar;
