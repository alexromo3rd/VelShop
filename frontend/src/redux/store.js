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

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);
