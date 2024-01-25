import Skeleton from "@/components/skeleton";
import React from "react";
import styles from "./styles.module.scss";

const OrderLoading = () => {
  return (
    <div className={styles.listItemContainer}>
      <Skeleton />
    </div>
  );
}

export default OrderLoading;