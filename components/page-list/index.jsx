
import React, { Fragment, useContext } from 'react';
import PageListItem from './page-list-item';
import styles from "./styles.module.scss";
import { OrdersContext } from '@/context/order.context';

const PageList = () => {
  const { ordersMap } = useContext(OrdersContext);

  return (
    <div className={styles.pageListContainer}>
      {ordersMap.map((order) => (
        <Fragment key={order.id}>
          <PageListItem order={order} />
        </Fragment>
      ))}
    </div>
  );
}

export default PageList;
