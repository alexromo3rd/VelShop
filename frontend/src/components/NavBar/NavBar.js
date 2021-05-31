import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearUser } from '../../redux/userReducer';
import './NavBar.css';

const NavBar = ({ user, clearUser, cartItems }) => {
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
    <nav>
      <ul className='nav-links'>
        <Link to='/'>Home</Link>
        {user.email && <Link to='/'>Profile</Link>}
        {!user.email && <Link to='/signup'>Sign Up</Link>}
        {!user.email && <Link to='/login'>Login</Link>}
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/contact'>Contact</Link>
        {user.email && <Link to='/'>Logout</Link>}
      </ul>
    </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
