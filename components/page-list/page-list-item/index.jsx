import React from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';

const PageListItem = ({ order }) => {
  return (
    <div className={styles.listItemContainer}>
      <div className={styles.itemHeader}>
        <img
          className={styles.itemHeaderImage}
          src={order.image_url}
        />
      </div>
      <div className={styles.itemBody}>
        <h3 className={styles.itemBodyTitle}>{order.title}</h3>
        <span className={styles.itemBodyFavoriteCount}>Toplam Favori Sayısı</span>
        <span className={styles.itemBodyUpdateDate}>Son güncelleme: 2.23.334</span>
      </div>
    </div>
  );
}

export default PageListItem;
