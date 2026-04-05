import React from 'react';
import HeroSection from '../components/HomeComponent/HeroHome';
import AboutHomeSection from '../components/HomeComponent/AboutHome'

const Home: React.FC = () => {
  return (
   <div>
    <HeroSection/>
    <AboutHomeSection/>
   </div>
  );
};

export default Home;