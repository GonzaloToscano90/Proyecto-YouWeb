import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Index';
import Navbar from '../components/Navbar/Index';
import HeroSection from '../components/HeroSection/Index';
import InfoSection from '../components/InfoSection/Index';
import { homeObjOne, homeObjOne2 } from '../components/InfoSection/Data';
import Servicios from '../components/InfoSection/Servicios';

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
      <InfoSection {...homeObjOne}/>
      <Servicios {...homeObjOne2}/>

    </>
      
  ) 
};

export default Home 
