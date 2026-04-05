import React from 'react';
import HeroSection from '../components/HomeComponent/HeroHome';
import AboutHomeSection from '../components/HomeComponent/AboutHome'
import HomeServicesSection from '../components/HomeComponent/HomeServices'

const Home: React.FC = () => {
  return (
   <div>
    <HeroSection/>
    <AboutHomeSection/>
    <HomeServicesSection/>
   </div>
  );
};

export default Home;