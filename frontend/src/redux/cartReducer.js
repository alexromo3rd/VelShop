import axios from 'axios';

const initialState = {
  cartItems: [],
};

const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

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
    payload: axios.get(`/api/products/${id}`),
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
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_ADD_ITEM + '_REJECTED':
      return { ...state };
    case CART_REMOVE_ITEM:
      return { ...state, cart: payload };
    default:
      return state;
  }
}
