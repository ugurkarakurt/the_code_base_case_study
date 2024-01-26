"use client"
import Button from '@/components/button';
import React from 'react';
import styles from "./styles.module.scss";
import { usePathname } from 'next/navigation'

const Actions = () => {
  const pathname = usePathname()

  return (
    <div className={styles.actionsContainer}>
      {pathname !== "/add-order" && (<Button buttonType="submitButton" link="/add-order" children="Yeni İlan Ekle" />)}
    </div>
  );
}

export default Actions;
