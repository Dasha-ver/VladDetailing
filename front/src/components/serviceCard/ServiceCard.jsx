import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ name }) => (
  <div className={`${styles.card} bg-white shadow-md rounded p-6 mb-6`}>
    <h2 className={styles.title}>{name}</h2>
  </div>
);

export default ServiceCard;


