import React from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = (id) => {
  return (
    <div>
        <ServicesContainer id = {id}>
            <ServicesH1>Nuestro Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Desarrollo Web</ServicesH2>
                    <ServicesP>Adaptable a dispositivos moviles y computadoras</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Redes Sociales</ServicesH2>
                    <ServicesP>Creacion de contenido y 2 publicaciones diarias</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Diseño de logotipo</ServicesH2>
                    <ServicesP>Creamos tu marca personal con un logotipo unico</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </div>
  )
};

export default Services;
