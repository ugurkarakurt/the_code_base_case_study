import React from 'react';
import styles from "./styles.module.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={styles.formInputContainer}>
      <input {...otherProps} />
      {label && (
        <label shrink={otherProps.value.length}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;