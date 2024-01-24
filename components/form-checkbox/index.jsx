import React from 'react';
import styles from "./styles.module.scss";

const FormCheckbox = ({ label, checkboxFor, checkboxId, ...otherProps }) => {
  return (
    <div className={styles.formCheckboxContainer}>
      <input id={checkboxId} {...otherProps} />
      {label && (
        <label htmlFor={checkboxFor} shrink={otherProps.value.length}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormCheckbox;