import React from 'react';
import HeroBanner from '../components/heroBanner/HeroBanner'
import Header from '../components/header/Header';
import Services from './Services'
import './branding.css';

const Home = () => {

  return(
    <div className="home-background">
      <Header/>
      <HeroBanner/>
      <Services/>
    </div>
  );
}

export default Home;