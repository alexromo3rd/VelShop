import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import './Cart.css';

const Cart = (props) => {
  const history = useHistory();
  const productId = history.location.pathname.split('/')[2];
  const qty = history.location.search
    ? Number(history.location.search.split('=')[1])
    : 1;
  const cart = props.cartItems;

  useEffect(() => {
    if (productId) {
      props.addToCart(productId, qty);
    }
  }, [props.addToCart, productId, qty]);

  console.log(cart);

  return (
    <>
      <h2>Cart</h2>
    </>
  );
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

const mapStateToProps = (reduxState) => {
  return {
    cartItems: reduxState.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
