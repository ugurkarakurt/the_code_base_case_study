import React from 'react';
import styles from "./styles.module.scss";

const PageTitle = ({ children, title, subTitle }) => {
  return (
    <div className={styles.pageTitleContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subTitle}>{subTitle}</h2>
      </div>
      <div className={styles.childrenContainer}>
        {children}
      </div>
    </div>
  );
}

export default PageTitle;
