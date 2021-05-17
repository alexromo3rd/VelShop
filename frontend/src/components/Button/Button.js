import React from 'react';
import './Button.css';

const Button = (props) => {
  const className = `button ${props.styleName}`;
  return (
    <button type='button' className={className} onClick={props.handleClick}>
      {props.label}
    </button>
  );
};

export default Button;
