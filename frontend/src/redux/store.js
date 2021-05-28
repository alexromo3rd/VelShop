import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import productListReducer from './productListReducer';
import productDetailsReducer from './productDetailsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  userReducer,
  productListReducer,
  productDetailsReducer,
  cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartReducer: { cartItems: cartItemsFromStorage },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);

store.subscribe(() => {
  localStorage.setItem(
    'cartItems',
    JSON.stringify(store.getState().cartReducer.cartItems)
  );
});

export default store;
