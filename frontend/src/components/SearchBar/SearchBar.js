import React, { useState, useEffect } from 'react';
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
      <Button styleName='submit' label='Search' handleClick={submit} />
    </section>
  );
};

export default SearchBar;
