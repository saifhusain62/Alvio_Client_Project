import React from 'react';
import HeroSection from '../components/HomeComponent/HeroHome';
import AboutHomeSection from '../components/HomeComponent/AboutHome'
import HomeServicesSection from '../components/HomeComponent/HomeServices'
import WorkSection from '../components/HomeComponent/WorkSection';


const Home: React.FC = () => {
  return (
   <div>
    <HeroSection/>
    <AboutHomeSection/>
    <HomeServicesSection/>
    <WorkSection/>
   </div>
  );
};

export default Home;