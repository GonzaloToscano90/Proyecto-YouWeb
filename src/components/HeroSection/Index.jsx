import React, {useState} from 'react';
import Video from '../../videos/video(1).mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
      <HeroContainer >
          <HeroBg>
              <VideoBg autoPlay loop muted >
                  <source src={Video} type='video/mp4' />
              </VideoBg>  
          </HeroBg>
          <HeroContent>
              <HeroH1>Desarrollamos tu sitio Web</HeroH1>
              <HeroP>
                  Contactanos hoy y recibe 25% de descuento
              </HeroP>
              <HeroBtnWrapper>
                  <Button 
                  to= 'signup'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover} 
                  primary = 'true'
                  dark = 'true'
                  >
                     Inicia Ahora { hover ? <ArrowForward/> : <ArrowRight/> }                  
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer> 
  )
};

export default HeroSection;
