import axios from 'axios';

const initialState = {
  cartItems: [],
};

const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

export function addToCart(id, qty) {
  return {
    type: CART_ADD_ITEM,
    payload: axios
      .get(`/api/products/${id}`)
      .then((res) => ({ item: res.data, qty })),
  };
}

export function removeFromCart(id) {
  return {
    type: CART_REMOVE_ITEM,
    payload: id,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
    payload: [],
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ADD_ITEM + '_PENDING':
      return { ...state };
    case CART_ADD_ITEM + '_FULFILLED':
      const { item, qty } = payload;

      const existItem = state.cartItems.find(
        (x) => x.product_id === item.product_id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product_id === existItem.product_id ? { ...item, qty } : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, qty }],
        };
      }
    case CART_ADD_ITEM + '_REJECTED':
      return { ...state };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product_id !== payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
}
