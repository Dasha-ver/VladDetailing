import React from 'react';
import styles from './ServiceCard.module.css';
import polirovka from '../../assets/polirovka.jpg';
import protectedCoat from '../../assets/protectedCoat.jpg';
import protectedFilm from '../../assets/protectedFilm.jpg';

const backgroundMap = {
  'Полировка кузова': polirovka,
  'Защитные покрытия': protectedCoat,
  'Защитная плёнка': protectedFilm,
};

const ServiceCard = ({ name, description }) => {
  const backgroundImage = backgroundMap[name] || polirovka;

  return (
<div className={styles.cardHorizontal}>
  <div
    className={styles.image}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  />
  <div className={styles.rightContent}>
    <div className={styles.overlay} />
    <div className={styles.content}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <button className={styles.cta}>Подробнее</button>
    </div>
  </div>
</div>




  );
};

export default ServiceCard;


