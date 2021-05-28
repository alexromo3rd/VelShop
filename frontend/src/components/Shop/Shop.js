import React, { useEffect } from 'react';
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

const Shop = ({
  getProductList,
  getProductListByCategory,
  loading,
  productList,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/shop') {
      getProductList();
    } else {
      getProductListByCategory(history.location.pathname.split('/')[2]);
    }
  }, [getProductList, getProductListByCategory, history.location.pathname]);

  return (
    <>
      <SearchBar />
      <Categories />
      {loading ? <Loader /> : <ProductList list={productList} />}
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
