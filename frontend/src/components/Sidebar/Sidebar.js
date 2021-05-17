import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './SideBar.css';

const SideBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, [loggedIn]);

  return (
    <>
      <Link to='/' className='title link'>
        Vel the Wonder
      </Link>
      <div>
        {loggedIn ? (
          <div className='user-actions'>
            <Link to='/profile' className='inline-link'>
              <i className='far fa-user'></i>
            </Link>
            <Link to='/logout' className='inline-link'>
              <i class='fas fa-sign-out-alt'></i>
            </Link>
          </div>
        ) : (
          <Link to='/login' className='login link'>
            Login
          </Link>
        )}
      </div>
      <nav className='navigation'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/videos' className='link'>
          Videos
        </Link>
        <Link to='/photos' className='link'>
          Photos
        </Link>
        <Link to='/shop' className='link'>
          Shop
        </Link>
        <Link to='/contact' className='link'>
          Contact
        </Link>
      </nav>
      <footer className='social-media-links'>
        <a
          href='https://www.instagram.com/vel_nine'
          target='_blank'
          rel='noreferrer'
          className='inline-link'
        >
          <i class='fab fa-instagram'></i>
        </a>
        <a
          href='https://www.facebook.com/Vel-9-383125315074652/'
          target='_blank'
          rel='noreferrer'
          className='inline-link'
        >
          <i class='fab fa-facebook'></i>
        </a>
        <a
          href='https://twitter.com/velthewonder'
          target='_blank'
          rel='noreferrer'
          className='inline-link'
        >
          <i class='fab fa-twitter-square'></i>
        </a>
      </footer>
    </>
  );
};

export default SideBar;
