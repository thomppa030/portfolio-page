import React from 'react';
import '../../App.css';
import Cards from '../Cards'; 
import HeroSection from '../HeroSection';
import StackedCards from '../stackedCards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <StackedCards />
      <Cards />
      <Footer/> 
    </>
  );
}

export default Home;