import axios from 'axios';

const initialState = {
  loading: false,
  productList: [],
};

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';

export function getProductList() {
  const products = axios.get('/api/products');

  return {
    type: GET_PRODUCT_LIST,
    payload: products,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_LIST + '_PENDING':
      return { ...state, loading: true };
    case GET_PRODUCT_LIST + '_FULFILLED':
      return { ...state, productList: payload.data, loading: false };
    case GET_PRODUCT_LIST + '_REJECTED':
      return { ...state, loading: false };
    default:
      return state;
  }
}
