import React, { useState, useEffect } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <>
      <form className='login-form'>
        <h2>Welcome back! Please log in.</h2>
        <FormInput
          name='username'
          label='Username'
          type='email'
          placeholder='Enter your email...'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className='login-input'
        />

        <FormInput
          name='password'
          label='Password'
          type='password'
          placeholder='Enter your password...'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='login-input'
        />

        <Button styleName='submit' label='Submit' handleClick={submit} />
      </form>
    </>
  );
};

export default Login;
