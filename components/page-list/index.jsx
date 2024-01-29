import React, { useContext, useEffect } from 'react';
import PageListItem from './page-list-item';
import styles from "./styles.module.scss";
import { OrdersContext } from '@/context/order';
import OrderLoading from './loading';
import { motion, useAnimation } from "framer-motion";

const PageList = () => {
  const { filteredOrders } = useContext(OrdersContext);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    }));
  }, [filteredOrders, controls]);

  return (
    <div className={styles.pageListContainer}>
      {!filteredOrders.length ? (
        Array.from({ length: 8 }).map((_, index) => (
          <OrderLoading key={index} />
        ))
      ) : (
        filteredOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            custom={index}
            className="grid-item"
          >
            <PageListItem order={order} />
          </motion.div>
        ))
      )}
    </div>
  );
}

export default PageList;
