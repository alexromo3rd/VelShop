import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createUser } from '../../redux/userReducer';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignUp.css';

const SignUp = ({ user, createUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submit = () => {
    createUser({ name, email, password });
    history.push('/');
  };

  if (user.email) {
    return <Redirect to='/' />;
  }

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
  createUser: createUser,
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
