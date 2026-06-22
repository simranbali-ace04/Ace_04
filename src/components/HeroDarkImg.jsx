import React from 'react'
import HeroDark from "../assets/HeroDark.webp";


const HeroDarkImg = () => {
  return (
    <div className='w-full h-full'>
      <img 
        src={HeroDark} 
        alt="Dark Mode Hero Background"
        className='w-full h-full object-cover rounded-t-2xl'
      />
    </div>
  );
};

export default HeroDarkImg
