import React from 'react'
import TextCard from './TextCard'
import Card from './Card'

const Hero = () => {
  return (
    <div className='flex h-[80vh] w-auto px-15 py-10 gap-50 bg-white justify-center'>
     <div className='w-[60vh]'>
      <TextCard/>
     </div>

      <div className='flex gap-2 px-2'>
      <Card/>
      <Card/>
      <Card/>
      </div>
      
    </div>
  )
}

export default Hero
