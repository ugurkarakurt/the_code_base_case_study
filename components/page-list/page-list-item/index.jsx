import React from 'react';
import styles from "./styles.module.scss";
import FavoriteIcon from "./favorite-icon.png";
import FavoriteIconEmpty from "./favorite-icon-empty.png";
import DeleteIcon from "./delete-icon.png";
import FireICon from "./fire-icon.png"
import { formatToCustomDate } from '@/utils/date';
import Image from 'next/image';

const PageListItem = ({ order }) => {

  const formattedDate = formatToCustomDate(order.last_update_date)

  return (
    <div className={styles.listItemContainer}>
      <div className={styles.itemHeader}>
        <div className={styles.itemActions}>
          <div className={styles.favoriteButton}>
            <Image
              className={styles.favoriteIcon}
              src={order.favorite_count ? FavoriteIcon : FavoriteIconEmpty}
              alt='favorite_icon'
            />
          </div>
          <div className={styles.deleteButton}>
            <Image
              className={styles.deleteIcon}
              src={DeleteIcon}
              alt='delete_icon'
            />
          </div>
        </div>
        <div className={styles.fireBadge}>
          <Image
            className={styles.fireIcon}
            src={FireICon}
            alt='fire_badge_icon'
          />
          Acil
        </div>
        <img
          className={styles.itemHeaderImage}
          src={order.image_url}
          alt='order_image'
        />
      </div>
      <div className={styles.itemBody}>
        <h3 className={styles.itemBodyTitle}>{order.title}</h3>
        <span className={styles.itemBodyFavoriteCount}>Toplam Favori Sayısı: {order.favorite_count}</span>
        <span className={styles.itemBodyUpdateDate}>Son güncelleme: {formattedDate}</span>
      </div>
    </div>
  );
}

export default PageListItem;
