import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';

const stripePromise = loadStripe('pk_test_fm2RtiUeglz5oQL8GXe4xjzM');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
