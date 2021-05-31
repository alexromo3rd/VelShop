import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
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
      <a
        href='https://www.youtube.com/channel/UCnit1Sd-IUQfRIb_hwYClTA'
        target='_blank'
        rel='noreferrer'
        className='inline-link'
      >
        <i className='fab fa-youtube'></i>
      </a>
      <a
        href='https://open.spotify.com/artist/6Dcufc8lKB2eVG5JKnT5fZ?si=apooDyKiSxGuMwKMnLJ18Q&nd=1'
        target='_blank'
        rel='noreferrer'
        className='inline-link'
      >
        <i className='fab fa-spotify'></i>
      </a>
    </div>
  );
};

export default Footer;
