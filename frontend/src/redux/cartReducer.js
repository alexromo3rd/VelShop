// import axios from 'axios';

// const initialState = {
//   loading: false,
//   cartItems: [],
// };

// const CART_ADD_ITEM = 'CART_ADD_ITEM';
// const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

// export function cartAddItem(id) {
//   const item = axios.get(`/api/products/${id}`);

//   const existItem = state.

//   return {
//     type: CART_ADD_ITEM,
//     payload: productById,
//   };
// }

// export function cartRemoveItem(id) {
//   const productById = axios.get(`/api/products/${id}`);

//   return {
//     type: CART_REMOVE_ITEM,
//     payload: productById,
//   };
// }

// export default function reducer(state = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ADD_ITEM + '_PENDING':
//       return { ...state, loading: true };
//     case CART_ADD_ITEM + '_FULFILLED':
//       return { ...state, productList: payload.data, loading: false };
//     case CART_ADD_ITEM + '_REJECTED':
//       return { ...state, loading: false };
//     case CART_REMOVE_ITEM:
//       return { ...state, productList: payload.data, loading: false };
//     default:
//       return state;
//   }
// }
