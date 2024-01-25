"use client"

import React from 'react';
import { OrdersProvider } from '@/context/order.context';
import { AlertProvider } from '@/context/alert';
import PageTitle from '@/components/page-title';
import styles from "./styles.module.scss";
import PageList from '@/components/page-list';
import ListActions from '@/components/list-actions';
import AlertMessage from '@/components/alert/alert-message.component';

const HomePageContainer = () => {
  return (
    <div className={styles.homeContainer}>
      <AlertProvider>
        <OrdersProvider>
          <PageTitle title={"Anasayfa"} subTitle={"Vitrin"}>
            <ListActions />
          </PageTitle>
          <PageList />
          <AlertMessage />
        </OrdersProvider>
      </AlertProvider>
    </div>
  );
}

export default HomePageContainer;
