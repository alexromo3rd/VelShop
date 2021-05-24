import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/userReducer';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './Profile.css';

const Profile = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!props.user.email) {
    return <Redirect to='/' />;
  }

  const update = async () => {
    try {
      const user = await axios.put(`/api/update/${props.match.params.id}`, {
        email,
        password,
      });
      props.updateUser(user);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className='form'>
        <h2>{props.user.name}, You may update your account info below.</h2>

        <FormInput
          name='email'
          label={`Email: ${props.user.email}`}
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

        <Button styleName='update' label='Update' handleClick={update} />
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
