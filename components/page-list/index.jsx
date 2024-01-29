import React, { Fragment, useContext } from 'react';
import PageListItem from './page-list-item';
import styles from "./styles.module.scss";
import { OrdersContext } from '@/context/order';
import OrderLoading from './loading';

const PageList = () => {
  const { filteredOrders } = useContext(OrdersContext);

  return (
    <div className={styles.pageListContainer}>
      {!filteredOrders.length ? (
        Array.from({ length: 8 }).map((_, index) => (
          <OrderLoading key={index} />
        ))
      ) : (
        filteredOrders.map((order) => (
          <Fragment key={order.id}>
            <PageListItem order={order} />
          </Fragment>
        ))
      )}
    </div>
  );
}

export default PageList;
