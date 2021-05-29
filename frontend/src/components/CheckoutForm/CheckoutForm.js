import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';
import axios from 'axios';
import './CheckoutForm.css';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'black',
      color: '#000',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: ' #FFCCCC ',
      color: ' #FFCCCC ',
    },
  },
};

const CheckoutForm = ({ cartItems }) => {
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const subTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const res = await axios.post('/api/payment', {
          id,
          amount: Math.round(subTotal * 100),
        });

        if (res.data.success) {
          console.log('Successful payment');
          setSuccess(true);
          setTimeout(() => {
            history.push('/');
          }, 2000);
        }
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form className='checkout' onSubmit={handleSubmit}>
          <fieldset className='FormGroup'>
            <div className='FormRow'>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <>
          <h2>
            You just bought some sweet merch! Sending you back to the home page
            now...
          </h2>
        </>
      )}
    </>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    cartItems: reduxState.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps)(CheckoutForm);
