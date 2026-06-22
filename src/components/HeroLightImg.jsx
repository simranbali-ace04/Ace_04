import React from 'react';
import HeroLight from "../assets/HeroLight.webp"

const HeroLightImg = () => {
  return (
    <div className='w-full h-full'>
      <img 
        src={HeroLight} 
        alt="Light Mode Hero Background"
        className='w-full h-full object-cover rounded-t-2xl'
      />
    </div>
  );
};

export default HeroLightImg;