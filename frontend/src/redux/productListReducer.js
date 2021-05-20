const initialState = {
  productList: [],
};

const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';

export function setProductList(productListObj) {
  return {
    type: SET_PRODUCT_LIST,
    payload: productListObj,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCT_LIST:
      return { ...state, productList: payload };
    default:
      return state;
  }
}
