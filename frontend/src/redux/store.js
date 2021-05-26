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

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
