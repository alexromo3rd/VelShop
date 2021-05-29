import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartReducer';
import Button from '../Button/Button';
import './Cart.css';

const Cart = ({ addToCart, removeFromCart, cartItems }) => {
  const history = useHistory();
  const productId = history.location.pathname.split('/')[2];
  const qty = history.location.search
    ? Number(history.location.search.split('=')[1])
    : 1;

  useEffect(() => {
    if (productId) {
      addToCart(productId, qty);
      history.push('/cart');
    }
  }, [addToCart, history, productId, qty]);

  const removeFromCartHandler = (id) => {
    removeFromCart(id);
  };

  const handleClick = (e) => {
    const { product_id } = cartItems.find(
      (item) => item.name === e.target.innerText
    );
    history.push(`/products/${product_id}`);
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=checkout');
  };

  return (
    <div className='cart'>
      <section className='cart-items'>
        <div className='item-heading'>
          <p>Product</p>
          <p>Description</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        {cartItems.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          cartItems.map(({ product_id, name, price, count_in_stock, qty }) => (
            <div key={product_id} className='cart-item'>
              <img
                src='https://james-hare.com/images/imagenotfound.jpg'
                alt='not found'
              />
              <p
                className='clickable-item-name'
                onClick={(e) => handleClick(e)}
              >
                {name}
              </p>
              <p className='price'>${price}</p>
              <p className='drop-down'>
                <select
                  value={qty}
                  onChange={(e) => {
                    addToCart(product_id, Number(e.target.value));
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
              </p>
              <Button
                styleName='remove'
                label={<i className='fas fa-trash'></i>}
                handleClick={() => removeFromCartHandler(product_id)}
              />
            </div>
          ))
        )}
      </section>
      <section className='cart-details'>
        <h2 className='subtotal'>
          Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </h2>
        <h2>
          $
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}
        </h2>
        {cartItems.length !== 0 && (
          <Button
            styleName='submit'
            label='Checkout'
            handleClick={checkoutHandler}
          />
        )}
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
};

const mapStateToProps = (reduxState) => {
  return {
    cartItems: reduxState.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
