import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import './Cart.css';

const Cart = ({ addToCart, cartItems }) => {
  const history = useHistory();
  const productId = history.location.pathname.split('/')[2];
  const qty = history.location.search
    ? Number(history.location.search.split('=')[1])
    : 1;

  useEffect(() => {
    if (productId) {
      addToCart(productId, qty);
    }
  }, [addToCart, productId, qty]);

  return (
    <div className='cart'>
      <section className='cart-items'>
        {cartItems.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          cartItems.map((item) => (
            <div key={item.product_id} className='cart-item'>
              <img
                src='https://james-hare.com/images/imagenotfound.jpg'
                alt='not found'
              />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>
                Qty:
                <select
                  value={item.qty}
                  onChange={(e) => {
                    addToCart(item.product_id, Number(e.target.value));
                  }}
                  name='qty'
                  id='qty-select'
                >
                  {[...Array(item.count_in_stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
            </div>
          ))
        )}
      </section>
      <section className='cart-details'></section>
    </div>
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
