import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearUser } from '../../redux/userReducer';
import Button from '../Button/Button';
import './NavBar.css';

const NavBar = ({ user, clearUser, cartItems }) => {
  const history = useHistory();

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
        {user.email && <Link to={`/profile/${user.user_id}`}>Profile</Link>}
        {!user.email && <Link to='/signup'>Sign Up</Link>}
        {!user.email && <Link to='/login'>Login</Link>}
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>
          Cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </Link>
        {user.email && (
          <Button styleName='logout' label='Logout' handleClick={logout} />
        )}
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
