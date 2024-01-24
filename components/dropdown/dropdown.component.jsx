"use client"
import React, { useState, useEffect, useRef } from "react";
import DropdownIcon from './sort-icon.png';
import Image from 'next/image';
import styles from "./styles.module.scss";

const Dropdown = ({ children, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggling = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={`${styles.dropdownToggler} ${isOpen ? styles.active : ''}`} onClick={toggling}>
        <Image
          className={styles.icon}
          src={DropdownIcon}
          priority
          unoptimized
          alt='site_logo'
        />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div className={styles.dropdownItem} key={option}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
