import React, { useContext } from 'react';
import styles from "./styles.module.scss";
import FavoriteIcon from "./favorite-icon.png";
import FavoriteIconEmpty from "./favorite-icon-empty.png";
import DeleteIcon from "./delete-icon.png";
import FireICon from "./fire-icon.png"
import { formatToCustomDate } from '@/utils/date';
import Image from 'next/image';
import { OrdersContext } from '@/context/order.context';

const PageListItem = ({ order }) => {
  const { removeOrderFromList, increaseOrderFavoriteCount } = useContext(OrdersContext);

  const formattedDate = formatToCustomDate(order.last_update_date);

  const removeItem = () => removeOrderFromList(order)


  const increaseFavoriteCount = () => {
    const newOrder = { ...order, favorite_count: order.favorite_count + 1 }
    increaseOrderFavoriteCount(newOrder)
  }


  return (
    <div className={styles.listItemContainer}>
      <div className={styles.itemHeader}>
        <div className={styles.itemActions}>
          <div className={styles.favoriteButton} onClick={increaseFavoriteCount}>
            <Image
              className={`${styles.favoriteIcon} ${order.favorite_count ? styles.full : styles.empty}`}
              src={order.favorite_count ? FavoriteIcon : FavoriteIconEmpty}
              alt='favorite_icon'
            />
          </div>
          <div className={styles.deleteButton} onClick={removeItem}>
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
