import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  }, []);

  return (
    <section className='log-out'>
      <p>You have successfully been logged out. Come back soon!</p>
      <br />
      <img
        src='https://media3.giphy.com/media/MShsAGrAY5QhfxFvQF/giphy.gif?cid=790b76110f3403417a11eceb6c6ef681b98d9fd8ce6f298b&rid=giphy.gif&ct=s'
        alt='ski ya later'
      />
      <p>
        You will be redirected to the home page automatically in a few
        seconds...
      </p>
    </section>
  );
};

export default Logout;
