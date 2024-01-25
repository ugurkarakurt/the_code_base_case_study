import React, { Fragment, useContext } from 'react';
import PageListItem from './page-list-item';
import styles from "./styles.module.scss";
import { OrdersContext } from '@/context/order.context';
import OrderLoading from './loading';

const PageList = () => {
  const { ordersMap } = useContext(OrdersContext);

  return (
    <div className={styles.pageListContainer}>
      {!ordersMap.length ? (
        Array.from({ length: 8 }).map((_, index) => (
          <OrderLoading key={index} />
        ))
      ) : (
        ordersMap.map((order) => (
          <Fragment key={order.id}>
            <PageListItem order={order} />
          </Fragment>
        ))
      )}
    </div>
  );
}

export default PageList;
