import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductById } from '../../redux/productDetailsReducer';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import './ProductDetails.css';

const ProductDetails = (props) => {
  // const isInitialMount = useRef(true);
  const history = useHistory();
  const productId = history.location.pathname.split('/')[2];
  // const [product, setProduct] = useState({});
  const [itemQty, setItemQty] = useState(1);

  useEffect(() => {
    console.log('render');
    props.getProductById(productId);
  }, [props.getProductById]);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     setProduct(props.productList);
  //   }
  // }, [productId, props.productList]);

  // const assignProduct = () => {
  //   setProduct(props.productList);
  // };

  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${itemQty}`);
  };

  const { category, price, description, name, count_in_stock, qty } =
    props.product;

  return (
    <>
      <SearchBar />
      {/* Wrap in conditional if props.product exists then return this jsx section */}
      <section className='product-details'>
        <div className='name-image'>
          <h2>{name}</h2>
          <img
            src='https://james-hare.com/images/imagenotfound.jpg'
            alt='not found'
          />
          <p>Description: {description}</p>
        </div>
        <div className='details-price'>
          <p>Price: ${price}</p>
          {count_in_stock > 0 ? (
            <div className='dropdown'>
              <span>Qty: </span>
              <select
                value={qty}
                onChange={(e) => {
                  setItemQty(e.target.value);
                }}
                name='qty'
                id='qty-select'
              >
                {[...Array(count_in_stock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <p>Out of stock</p>
          )}
          <p>Category: {category}</p>
          {count_in_stock > 0 && (
            <Button
              styleName='submit add-to-cart'
              label='Add to Cart'
              handleClick={addToCartHandler}
            />
          )}
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  getProductById: getProductById,
};

const mapStateToProps = (reduxState) => {
  return {
    product: reduxState.productDetailsReducer.product,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
