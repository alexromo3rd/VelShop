import React from 'react';
import './Button.css';

const Button = ({ styleName, label, roll = null, handleClick }) => {
  const className = `button ${styleName}`;
  return (
    <button
      roll={roll}
      type='button'
      className={className}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
