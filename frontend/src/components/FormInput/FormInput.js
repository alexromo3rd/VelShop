import React from 'react';
import './FormInput.css';

const FormInput = ({
  name,
  label,
  type,
  placeholder,
  onChange,
  value,
  className,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
    </>
  );
};

export default FormInput;
