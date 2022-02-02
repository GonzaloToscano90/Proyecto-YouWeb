import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Index';
import Navbar from '../components/Navbar/Index';
import HeroSection from '../components/HeroSection/Index';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection/>
    </>
      
  ) 
};

export default Home 
