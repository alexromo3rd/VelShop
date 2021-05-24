import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import Loader from '../Loader/Loader';
import {
  getProductList,
  getProductListByCategory,
} from '../../redux/productListReducer';
import './Shop.css';

const Shop = (props) => {
  const isInitialMount = useRef(true);
  const history = useHistory();

  useEffect(() => {
    props.getProductList();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      generateFilteredProductList();
    }
  }, [history.location.pathname.split('/')[2]]);

  const generateFilteredProductList = () => {
    if (history.location.pathname === '/shop') {
      props.getProductList();
    } else {
      console.log(history.location.pathname.split('/')[2]);
      props.getProductListByCategory(history.location.pathname.split('/')[2]);
    }
  };

  return (
    <>
      <SearchBar />
      <Categories />
      {props.loading ? <Loader /> : <ProductList list={props.productList} />}
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
  getProductListByCategory: getProductListByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
