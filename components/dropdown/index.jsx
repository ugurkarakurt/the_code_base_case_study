"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const Dropdown = ({ options, selectedOption, onOptionClicked, emptyIcon, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
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
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={styles.dropdownContainer}
      ref={dropdownRef}
    >
      <motion.div
        className={styles.dropdownToggler}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className={styles.iconWrapper}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          <Image
            className={styles.icon}
            src={isOpen ? icon : emptyIcon}
            priority
            unoptimized
            alt='site_logo'
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={`${styles.dropdown} slide_bottom_animation`}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {options.map((option) => (
          <motion.div variants={itemVariants} className={`${styles.dropdownItem} ${option.sortingKey === selectedOption ? `${styles.active}` : ''}`} onClick={() => onOptionClicked(option.sortingKey)} key={option.sortingKey}>
            {option.text}
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  );
}

export default Dropdown;
