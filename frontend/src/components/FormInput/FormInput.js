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
  required = false,
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
        required={required}
      />
    </>
  );
};

export default FormInput;
