import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../../redux/userReducer';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignUp.css';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try {
      const user = await axios.post('/api/register', { name, email, password });
      console.log(user);
      props.setUser(user);

      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className='form'>
        <h2>Welcome! Please create your account.</h2>
        <FormInput
          name='name'
          label='Name'
          type='text'
          placeholder='Enter your name...'
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='input'
        />

        <FormInput
          name='email'
          label='Email'
          type='email'
          placeholder='Enter your email...'
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

        <Button styleName='submit' label='Submit' handleClick={submit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
