import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductList } from '../../redux/productListReducer';
import Loader from '../Loader/Loader';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    props.getProductList();
  }, []);

  useEffect(() => {
    generateProductList();
  }, [props.productList]);

  const generateProductList = async () => {
    await setList(
      props.productList.map((product) => {
        return <Product key={product.product_id} product={product} />;
      })
    );
  };

  return <>{list.length === 0 ? <Loader /> : <>{list}</>}</>;
};

const mapStateToProps = (reduxState) => {
  return {
    productList: reduxState.productListReducer.productList,
  };
};

const mapDispatchToProps = {
  getProductList: getProductList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
