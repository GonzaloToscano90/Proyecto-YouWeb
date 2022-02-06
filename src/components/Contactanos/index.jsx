import React from 'react';
import {ContactContainer, ContactTitle, ContactGrid, ContactGridIcon, ContactGridImg } from './ContactanosElements'
import ImgWathsapp from '../../images/whatsapp.png'
import ImgGmail from '../../images/gmail.png'


const Contactanos = () => {
  return (
    <ContactContainer id='contactanos'>
      <ContactTitle>Contactanos</ContactTitle>
      <ContactGrid>
        <ContactGridIcon>
          <a href="mailto:zalo.jat@gmail.com "><img src={ImgGmail} alt="" /> </a>  
          <a href="https://api.whatsapp.com/send?phone=+543886301416&text=Hola!%20Sean%20Bienvenidos!!" target="_blank"><img src={ImgWathsapp} alt="" /> </a>  
        </ContactGridIcon>
        <ContactGridImg>

        </ContactGridImg>
      </ContactGrid>        
    </ContactContainer>
    )
};

export default Contactanos;
