import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';
import axios from 'axios';
import FormInput from '../FormInput/FormInput';
import './CheckoutForm.css';
import { clearCart } from '../../redux/cartReducer';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      color: '#32325D',
      fontWeight: 500,
      fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
      fontSize: '16px',
      fontSmoothing: 'antialiased',

      '::placeholder': {
        color: '#CFD7DF',
      },
      ':-webkit-autofill': {
        color: '#e39f48',
      },
    },
    invalid: {
      color: '#E25950',

      '::placeholder': {
        color: '#FFCCA5',
      },
    },
  },
};

const CheckoutForm = ({ cartItems, user, clearCart }) => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [city, setCity] = useState('Some City');
  const [line1, setLine1] = useState('555 Fake Street');
  const [line2, setLine2] = useState('');
  const [myState, setMyState] = useState('TX');
  const [phone, setPhone] = useState('123456789');
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
      billing_details: {
        address: {
          city,
          country: 'US',
          line1,
          line2,
          state: myState,
        },
        email,
        name,
        phone,
      },
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const res = await axios.post('/api/payment', {
          id,
          amount: Math.round(subTotal * 100),
        });

        if (res.data.success) {
          setSuccess(true);
          clearCart();
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
    <section className='container'>
      {!success ? (
        <>
          <form className='checkout' onSubmit={handleSubmit}>
            <fieldset className='FormGroup'>
              <div className='FormRow'>
                <h1 className='total'>Total: ${subTotal}</h1>
              </div>
              <div className='FormRow'>
                <FormInput
                  name='name'
                  label='*Name'
                  type='text'
                  placeholder='name...'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className='input'
                  required={true}
                />
              </div>
              <div className='FormRow'>
                <FormInput
                  name='email'
                  label='*Email'
                  type='email'
                  placeholder='email...'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='input'
                  required={true}
                />
              </div>
              <div className='FormRow'>
                <FormInput
                  name='phone'
                  label='*Phone'
                  type='tel'
                  placeholder='phone number...'
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className='input'
                  required={true}
                />
              </div>
              <div className='FormRow'>
                <FormInput
                  name='line1'
                  label='*Address 1'
                  type='text'
                  placeholder='address...'
                  onChange={(e) => setLine1(e.target.value)}
                  value={line1}
                  className='input'
                  required={true}
                />
              </div>
              <div className='FormRow'>
                <FormInput
                  name='line2'
                  label='Address 2'
                  type='text'
                  placeholder='address...'
                  onChange={(e) => setLine2(e.target.value)}
                  value={line2}
                  className='input'
                />
              </div>
              <div className='FormRow'>
                <FormInput
                  name='city'
                  label='*City'
                  type='text'
                  placeholder='city...'
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  className='input'
                  required={true}
                />
              </div>
              <div className='FormRow'>
                <FormInput
                  name='state'
                  label='*State'
                  type='text'
                  placeholder='state...'
                  onChange={(e) => setMyState(e.target.value)}
                  value={myState}
                  className='input'
                  required={true}
                />
              </div>
              <div className='FormRow'>
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button>Pay</button>
          </form>
        </>
      ) : (
        <>
          <h2 className='payment-successful'>
            You just bought some sweet merch! Sending you back to the home page
            now...
          </h2>
        </>
      )}
    </section>
  );
};

const mapDispatchToProps = {
  clearCart: clearCart,
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer.user,
    cartItems: reduxState.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
