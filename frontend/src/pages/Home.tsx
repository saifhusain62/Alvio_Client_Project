import React from 'react';
import HeroSection from '../components/HomeComponent/HeroHome';
import AboutHomeSection from '../components/HomeComponent/AboutHome'
import HomeServicesSection from '../components/HomeComponent/HomeServices'
import WorkSection from '../components/HomeComponent/WorkSection';
import TeamSection from '../components/HomeComponent/TeamSection';
import TestimonialsSection from '../components/HomeComponent/TestimonialsSection';



const Home: React.FC = () => {
  return (
   <div>
    <HeroSection/>
    <AboutHomeSection/>
    <HomeServicesSection/>
    <WorkSection/>
    <TeamSection/>
    <TestimonialsSection/>
   </div>
  );
};

export default Home;