import React, { useState, useEffect } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log(`Name: ${name} Username: ${username} Password: ${password}`);
  };

  return (
    <>
      <form className='form'>
        <h2>Welcome! Please create your account.</h2>
        <FormInput
          name='name'
          label='Name'
          type='email'
          placeholder='Enter your name...'
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='input'
        />

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

        <Button styleName='submit' label='Submit' handleClick={submit} />
      </form>
    </>
  );
};

export default SignUp;
