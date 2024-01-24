"use client"

import React from 'react';
import PageTitle from '@/components/page-title';
import styles from "./styles.module.scss";
import PageList from '@/components/page-list';
import { OrdersProvider } from '@/context/order.context';
import ListActions from '@/components/list-actions';

const HomePageContainer = () => {
  return (
    <div className={styles.homeContainer}>
      <OrdersProvider>
        <PageTitle title={"Anasayfa"} subTitle={"Vitrin"}>
          <ListActions />
        </PageTitle>
        <PageList />
      </OrdersProvider>
    </div>
  );
}

export default HomePageContainer;
