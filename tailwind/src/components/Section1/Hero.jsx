import React from 'react'
import TextCard from './TextCard'
import ImgCards from './ImgCards'
const Hero = (props) => {
  return (
    <div className='h-[80vh] w-full px-15 py-10 bg-white flex justify-between'>
      <TextCard/>
      <ImgCards users = {props.users}/>  
    </div>
  )
}

export default Hero
