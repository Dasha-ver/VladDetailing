import React from 'react';
import styles from './Header.module.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
   <header className={styles.header}>
  <div className={styles.headerContent}>
    <div className={styles.logo}>
      Detail<span className={styles.pro}>Pro</span><span className={styles.by}>.by</span>
    </div>

    <div className={styles.contactGroup}>
      <FaMapMarkerAlt className={styles.icon} />
      <a
        href="https://maps.google.com/?q=ул.+Победителей+45,+Минск"
        target="_blank"
        rel="noopener noreferrer"
      >
        ул. Победителей 45, Минск
      </a>
    </div>

    <div className={styles.contactGroup}>
      <FaPhoneAlt className={styles.icon} />
      <a href="tel:+375291234567">+375 (29) 123-45-67</a>
    </div>
  </div>
</header>

  );
};

export default Header;
