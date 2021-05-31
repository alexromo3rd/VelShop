import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearUser } from '../../redux/userReducer';
import Button from '../Button/Button';
import './Sidebar.css';

const SideBar = ({ user, clearUser, cartItems }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (user.email) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  const logout = async () => {
    try {
      await axios.delete('/api/logout');
      clearUser();
      history.push('/logout');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to='/' className='title link'>
        Vel Shop
      </Link>
      <nav className='navigation'>
        <Link to='/' className='link'>
          Home
        </Link>
        {loggedIn ? (
          <>
            <Link to={`/profile/${user.user_id}`} className='link'>
              Profile
            </Link>
            <Button
              styleName='logout'
              label='Logout'
              handleClick={logout}
            ></Button>
          </>
        ) : (
          <>
            <Link to='/signup' className='link'>
              Sign Up
            </Link>
            <Link to='/login' className='link'>
              Login
            </Link>
          </>
        )}
        <Link to='/shop' className='link'>
          Shop
        </Link>
        <Link to='/cart' className='link'>
          Cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </Link>
      </nav>
      <footer className='social-media-links'>
        <a
          href='https://www.instagram.com/vel_nine'
          target='_blank'
          rel='noreferrer'
          className='inline-link'
        >
          <i className='fab fa-instagram'></i>
        </a>
        <a
          href='https://www.facebook.com/Vel-9-383125315074652/'
          target='_blank'
          rel='noreferrer'
          className='inline-link'
        >
          <i className='fab fa-facebook'></i>
        </a>
        <a
          href='https://twitter.com/velthewonder'
          target='_blank'
          rel='noreferrer'
          className='inline-link'
        >
          <i className='fab fa-twitter-square'></i>
        </a>
      </footer>
    </>
  );
};

const mapDispatchToProps = {
  clearUser: clearUser,
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.userReducer.user,
    cartItems: reduxState.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
