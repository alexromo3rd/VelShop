import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductById } from '../../redux/productDetailsReducer';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import './ProductDetails.css';

const ProductDetails = (props) => {
  const isInitialMount = useRef(true);
  const history = useHistory();
  const [productId, setProductId] = useState(
    history.location.pathname.split('/')[2]
  );
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(0);

  useEffect(() => {
    props.getProductById(productId);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      assignProduct();
    }
  }, [history.location.pathname.split('/')[2]]);

  const assignProduct = () => {
    setProduct(props.productList);
    console.log(product);
  };

  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  const { category, price, description, name, count_in_stock } = props.product;

  return (
    <>
      <SearchBar />
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
                onChange={(e) => {
                  setQty(e.target.value);
                }}
                name='qty'
                id='qty-select'
              >
                <option value='none' selected disabled hidden>
                  Select
                </option>
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
