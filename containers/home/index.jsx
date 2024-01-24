"use client"

import PageTitle from '@/components/page-title';
import React from 'react';
import styles from "./styles.module.scss";
import Dropdown from '@/components/dropdown/dropdown.component';
import PageList from '@/components/page-list';
import { OrdersProvider } from '@/context/order.context';

const HomePageContainer = () => {
  return (
    <div className={styles.homeContainer}>
      <OrdersProvider>
        <PageTitle title={"Anasayfa"} subTitle={"Vitrin"}>
          <Dropdown
            children={'Results Per Page'}
            options={["Sırala (Son Eklenen)", "Sırala (Favori Sayısı)"]}
          />
        </PageTitle>
        <PageList />
      </OrdersProvider>
    </div>
  );
}

export default HomePageContainer;
