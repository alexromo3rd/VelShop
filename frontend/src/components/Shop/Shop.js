import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductList } from '../../redux/productListReducer';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
// import ProductList from '../ProductList/ProductList';
import './Shop.css';
import axios from 'axios';

const Shop = (props) => {
  const [searchValue, setSearchValue] = useState('');
  // const [category, setCategory] = useState('');

  useEffect(() => {
    props.getProductList();
  }, []);

  const submit = () => {
    console.log(`Search Value: ${searchValue}`);
    setSearchValue('');
  };

  return (
    <>
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
      <div className='categories'>
        <Link to='/shop/hats'>Hats</Link>
        <Link to='/shop/shirts'>Shirts</Link>
        <Link to='/shop/jackets'>Jackets</Link>
        <Link to='/shop/socks'>Socks</Link>
        <Link to='/shop/limited'>Limited Drops</Link>
        <Link to='/shop/misc'>Misc</Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      {JSON.stringify(props.productList)}
    </>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    productList: reduxState.productListReducer.productList,
  };
};

const mapDispatchToProps = {
  getProductList: getProductList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
