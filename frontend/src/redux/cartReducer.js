import axios from 'axios';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  loading: false,
  cart: { cartItems: cartItemsFromStorage },
};

const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

export function addToCart(id, qty) {
  const productById = axios.get(`/api/products/${id}`);

  return {
    type: CART_ADD_ITEM,
    payload: { productById, qty },
  };
}

export function removeFromCart(id) {
  const productById = axios.get(`/api/products/${id}`);

  return {
    type: CART_REMOVE_ITEM,
    payload: productById,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ADD_ITEM + '_PENDING':
      return { ...state, loading: true };
    case CART_ADD_ITEM + '_FULFILLED':
      const item = payload;

      const existItem = state.cartItems.find(
        (x) => x.product_id === item.product_id
      );

      if (existItem) {
        return (
          {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product_id === item.product_id ? item : x
            ),
            loading: false,
          },
          localStorage.setItem('cartItems'),
          JSON.stringify(state.cartItems)
        );
      } else {
        return (
          { ...state, cartItems: payload.data, loading: false },
          localStorage.setItem('cartItems'),
          JSON.stringify(state.cartItems)
        );
      }
    case CART_ADD_ITEM + '_REJECTED':
      return { ...state, loading: false };
    case CART_REMOVE_ITEM:
      return { ...state, cartItems: payload.data, loading: false };
    default:
      return state;
  }
}
