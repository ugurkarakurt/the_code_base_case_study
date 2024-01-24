import React from 'react';
import HomeLogo from './main-logo.png';
import Image from 'next/image';
import styles from "./styles.module.scss";
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={"/"} className={styles.logoContainer}>
      <Image
        className={styles.logo}
        src={HomeLogo}
        priority
        unoptimized
        alt='site_logo'
      />
    </Link>
  )
}

export default Logo;