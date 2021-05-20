import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../redux/userReducer';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setUser('Called the function');
  });

  const login = () => {
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <>
      <form className='form'>
        <h2>Welcome back! Please log in.</h2>
        <FormInput
          name='username'
          label='Username'
          type='email'
          placeholder='Enter your email...'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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

        <Button styleName='submit' label='Login' handleClick={login} />
      </form>
    </>
  );
};

const mapDispatchToProps = null;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
