import React from 'react'
import HeroDark from "../assets/HeroDark.webp";


const HeroDarkImg = () => {
  return (
    <div className='w-full flex justify-center'>
      <img src={HeroDark} alt="Dark Mode Hero Background"
      className='flex object-cover p-1 rounded-2xl'/>
    </div>
  )
}

export default HeroDarkImg
