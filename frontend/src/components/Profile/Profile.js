import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './Profile.css';

const Profile = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!props.user.email) {
    return <Redirect to='/' />;
  }

  const submit = () => {};

  return (
    <>
      <form className='form'>
        <h2>{props.user.name}, You may update your account info below.</h2>

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

const mapDispatchToProps = null;

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
