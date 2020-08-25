import React from 'react';

import styles from './Input.module.css';

const Input = ({ label, name, value, onChange, error, onBlur, ...props }) => {
  return (
    <div className={styles.inputwrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
