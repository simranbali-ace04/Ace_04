import React from 'react'
import HeroLight from "../assets/HeroLight.webp";


const HeroLightImg = () => {
  return (
    <div className='w-full flex justify-center'>
      <img src={HeroLight} alt="Dark Mode Hero Background"
      className='flex object-cover p-1 rounded-2xl'/>
    </div>
  )
}

export default HeroLightImg
