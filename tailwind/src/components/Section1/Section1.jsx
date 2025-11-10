import React from 'react'
import Navbar from './navbar'
import Hero from './hero'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-white-900'>
        <Navbar/>
        <Hero users = {props.users}/>
    </div>
  )
}

export default Section1
