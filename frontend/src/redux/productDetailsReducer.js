import axios from 'axios';

const initialState = {
  loading: false,
  product: [],
};

const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

export function getProductById(id) {
  const productById = axios.get(`/api/products/${id}`);

  return {
    type: GET_PRODUCT_BY_ID,
    payload: productById,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_BY_ID + '_PENDING':
      return { ...state, loading: true };
    case GET_PRODUCT_BY_ID + '_FULFILLED':
      return { ...state, product: payload.data, loading: false };
    case GET_PRODUCT_BY_ID + '_REJECTED':
      return { ...state, loading: false };
    default:
      return state;
  }
}
