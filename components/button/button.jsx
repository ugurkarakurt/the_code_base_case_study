import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./styles.module.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(otherProps.link)} className={`${styles.baseButton} ${styles[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
