import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import productListReducer from './productListReducer';

const rootReducer = combineReducers({
  userReducer,
  productListReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);
