import axios from 'axios';

const initialState = {
  loading: false,
  productList: [],
};

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
const GET_PRODUCT_LIST_BY_CATEGORY = 'GET_PRODUCT_LIST_BY_CATEGORY';

export function getProductList() {
  const products = axios.get('/api/products');

  return {
    type: GET_PRODUCT_LIST,
    payload: products,
  };
}

export function getProductListByCategory(category) {
  const productsByCategory = axios.get(
    `/api/products/categories?category=${category}`
  );

  return {
    type: GET_PRODUCT_LIST_BY_CATEGORY,
    payload: productsByCategory,
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
    case GET_PRODUCT_LIST_BY_CATEGORY + '_PENDING':
      return { ...state, loading: true };
    case GET_PRODUCT_LIST_BY_CATEGORY + '_FULFILLED':
      return { ...state, productList: payload.data, loading: false };
    case GET_PRODUCT_LIST_BY_CATEGORY + '_REJECTED':
      return { ...state, loading: false };
    default:
      return state;
  }
}
