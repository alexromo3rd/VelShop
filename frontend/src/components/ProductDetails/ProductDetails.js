import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductById } from '../../redux/productListReducer';
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

  const addToCart = () => {
    console.log('Added to cart');
  };

  const { category, price, description, name, count_in_stock } =
    props.productList;

  return (
    <section className='product-details'>
      <div className='name-image'>
        <h2>{name}</h2>
        <img
          src='https://james-hare.com/images/imagenotfound.jpg'
          alt='not found'
        />
      </div>
      <div className='details-price'>
        <p>Price: ${price}</p>
        <p>Qty in stock: {count_in_stock}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <Button
          styleName='submit add-to-cart'
          label='Add to Cart'
          handleClick={addToCart}
        />
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  getProductById: getProductById,
};

const mapStateToProps = (reduxState) => {
  return {
    productList: reduxState.productListReducer.productList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
