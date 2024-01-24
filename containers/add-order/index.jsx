"use client"
import React from 'react';
import styles from "./styles.module.scss";
import { OrdersProvider } from '@/context/order.context';
import PageTitle from '@/components/page-title';
import AddForm from '@/components/add-form';

const AddOrderPageContainer = () => {
  return (
    <div className={styles.addOrderContainer}>
      <OrdersProvider>
        <PageTitle title={"YENİ İLAN"} subTitle={"Ekle"} />
        <AddForm />
      </OrdersProvider>
    </div>
  );
}

export default AddOrderPageContainer;
