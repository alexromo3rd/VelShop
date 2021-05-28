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
      console.log('render');
      addToCart(productId, qty);
      history.push('/cart');
    }
  }, [addToCart, history, productId, qty]);

  const handleClick = (e) => {
    const { product_id } = cartItems.find(
      (item) => item.name === e.target.innerText
    );
    history.push(`/products/${product_id}`);
  };

  return (
    <div className='cart'>
      <section className='cart-items'>
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
              <p>${price}</p>
              <p>
                Qty:
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
