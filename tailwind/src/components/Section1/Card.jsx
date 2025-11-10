import React from 'react'
import CardContent from './CardContent'
const Card = (props) => {
  return (
    <div className='h-full w-[30vh] relative bg-black text-white text-2xl rounded-4xl shrink-0'>
      <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt='Scarlet macaw'/>
      <CardContent tag = {props.tag} key = {props.key} id = {props.id}/>
    </div>
  )
}

export default Card
