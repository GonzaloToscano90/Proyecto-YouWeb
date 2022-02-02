import React from 'react';
import Video from '../../videos/data2.mp4'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'

const HeroSection = () => {
  return (
      <HeroContainer >
          <HeroBg>
              <VideoBg autoPlay loop muted >
                  <source src={Video} type='video/mp4' />
              </VideoBg>  
          </HeroBg>
      </HeroContainer> 
  )
};

export default HeroSection;
