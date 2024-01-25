import React, { useContext, useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import FavoriteIcon from "./favorite-icon.png";
import FavoriteIconEmpty from "./favorite-icon-empty.png";
import DeleteIcon from "./delete-icon.png";
import FireICon from "./fire-icon.png"
import NoImagePlaceholder from "./no-image.jpg"
import { formatToCustomDate } from '@/utils/date';
import Image from 'next/image';
import { OrdersContext } from '@/context/order.context';
import { checkImage } from '@/utils/checkImage';
import { AlertContext } from '@/context/alert';

const PageListItem = ({ order }) => {
  const { removeOrderFromList, increaseOrderFavoriteCount } = useContext(OrdersContext);
  const { showAlert } = useContext(AlertContext);


  const formattedDate = formatToCustomDate(order.last_update_date);
  const [isImageValid, setIsImageValid] = useState(true);

  useEffect(() => {
    checkImage(order.image_url, () => {
      setIsImageValid(true);
    }, () => {
      setIsImageValid(false);
    });
  }, [order.image_url]);

  const removeItem = () => removeOrderFromList(order).then(() => {
    showAlert({
      isShow: true,
      alertType: 'success',
      alertContent: `İlan Başarıyla Kaldırıldı`,
    });
  });

  const increaseFavoriteCount = () => {
    const newOrder = { ...order, favorite_count: order.favorite_count + 1 };
    increaseOrderFavoriteCount(newOrder).then(() => {
      showAlert({
        isShow: true,
        alertType: 'warning',
        alertContent: `Favorilere Eklendi`,
      });
    });
  };

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
        {order.urgent && (
          <div className={styles.fireBadge}>
            <Image
              className={styles.fireIcon}
              src={FireICon}
              alt='fire_badge_icon'
            />
            Acil
          </div>
        )}
        {isImageValid ? (
          <img
            className={styles.itemHeaderImage}
            src={order.image_url}
            alt='order_image'
          />
        ) : (
          <Image
            className={styles.NoImagePlaceholder}
            src={NoImagePlaceholder}
            alt='fire_badge_icon'
          />
        )}
      </div>
      <div className={styles.itemBody}>
        <h3 className={styles.itemBodyTitle}>{order.title}</h3>
        <span className={styles.itemBodyFavoriteCount}>Toplam Favori Sayısı: {order.favorite_count}</span>
        <span className={styles.itemBodyUpdateDate}>Son güncelleme: {formattedDate}</span>
      </div>
    </div>
  );
};

export default PageListItem;
