import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Cart.css';

const Cart = () => {
  return (
    <>
      <h2>Cart</h2>
    </>
  );
};

const mapDispatchToProps = null;

const mapStateToProps = (reduxState) => {
  return {
    cart: reduxState.cartReducer.cart.cartItems,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
