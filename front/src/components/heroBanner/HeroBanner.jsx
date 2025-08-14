import React from 'react';
import styles from './HeroBanner.module.css';
import bannerVideo from '../../assets/banner.mp4';
import bannerImage from '../../assets/banner.jpg';

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.videoBackground}
        poster={bannerImage}
      >
        <source src={bannerVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео-фон.
      </video>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Впечатляющий детейлинг</h1>
        <p className={styles.subtitle}>Мы создаём эффект, который остаётся</p>
        <a href="#services" className={styles.cta}>Посмотреть услуги</a>
      </div>
    </section>
  );
};

export default HeroBanner;


