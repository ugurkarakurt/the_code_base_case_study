"use client"
import React from 'react';
import styles from "./styles.module.scss";
import { OrdersProvider } from '@/context/order';
import PageTitle from '@/components/page-title';
import AddForm from '@/components/add-form';
import { AlertProvider } from '@/context/alert';
import AlertMessage from '@/components/alert';

const AddOrderPageContainer = () => {
  return (
    <div className={styles.addOrderContainer}>
      <AlertProvider>
        <OrdersProvider>
          <PageTitle title={"YENİ İLAN"} subTitle={"Ekle"} />
          <AddForm />
          <AlertMessage />
        </OrdersProvider>
      </AlertProvider>
    </div>
  );
}

export default AddOrderPageContainer;
