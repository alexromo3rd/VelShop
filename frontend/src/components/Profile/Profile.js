import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/userReducer';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './Profile.css';

const Profile = ({ user, match, updateUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!user.email) {
    return <Redirect to='/' />;
  }

  const update = () => {
    updateUser({ user_id: match.params.id, email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className='form'>
        <h2>
          {user.name.split(' ')[0]}, You may update your account info below.
        </h2>

        <FormInput
          name='email'
          label={`Email: ${user.email}`}
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

        <Button styleName='submit' label='Update' handleClick={update} />
      </form>
    </>
  );
};

const mapDispatchToProps = {
  updateUser: updateUser,
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
