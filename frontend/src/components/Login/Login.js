import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../redux/userReducer';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './Login.css';

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  console.log(history);

  const redirect = history.location.search
    ? history.location.search.split('=')[1]
    : '/';

  useEffect(() => {
    if (user.email) {
      history.push(redirect);
    }
  }, [history, redirect, user.email]);

  const login = (e) => {
    e.preventDefault();
    setUser({ email, password });
  };

  return (
    <>
      <form className='form'>
        <h2>Welcome back! Please log in.</h2>
        <FormInput
          name='email'
          label='Email'
          type='email'
          placeholder='Enter your  email...'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className='input'
        />

        <FormInput
          name='password'
          label='Password'
          type='password'
          placeholder='Enter your password...'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='input'
        />

        <Button
          styleName='submit'
          label='Login'
          handleClick={(e) => login(e)}
        />
      </form>
    </>
  );
};

const mapDispatchToProps = {
  setUser: setUser,
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
