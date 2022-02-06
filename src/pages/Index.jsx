import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Index';
import Navbar from '../components/Navbar/Index';
import HeroSection from '../components/HeroSection/Index';
import InfoSection from '../components/InfoSection/Index';
import InfoSection2 from '../components/InfoSection/InfoSection2';
import Servicios from '../components/InfoSection/Servicios';
import { homeObjOne, homeObjOne2, homeObjOne3 } from '../components/InfoSection/Data';
import Services from '../components/NuestrosServicios/Index';
import Contactanos from '../components/Contactanos';


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
      <Services/>
      <InfoSection2 {...homeObjOne3}/>
      <Contactanos/>
    </>
      
  ) 
};

export default Home 
