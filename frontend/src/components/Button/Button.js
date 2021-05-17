import React from 'react';
import './Button.css';

const Button = ({ styleName, label, handleClick }) => {
  const className = `button ${styleName}`;
  return (
    <button type='button' className={className} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
