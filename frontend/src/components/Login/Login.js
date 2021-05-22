import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../redux/userReducer';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import axios from 'axios';
import './Login.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const user = await axios.post('/api/login', { email, password });
      props.setUser(user);

      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
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

        <Button styleName='submit' label='Login' handleClick={login} />
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
