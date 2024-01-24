
import React from 'react';
import Logo from './logo/logo.component';
import styles from "./styles.module.scss";
import Actions from './actions';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.actionsWrapper}>
          <Actions />
        </div>
      </div>
    </header>
  );
}

export default Header;
