import React from 'react';
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
    </section>
  );
};

export default SearchBar;
