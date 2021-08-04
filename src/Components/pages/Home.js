import React from 'react';
import '../../App.css';
import Card from '../Cards'; 
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Card />
      <Footer/> 
    </>
  );
}

export default Home;