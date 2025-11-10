import React from 'react'
import Card from './Card'
const ImgCards = (props) => {
  return (
      <div id = "right" className='h-full w-250 flex gap-5 px-2 flex-nowrap overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <Card key = {idx} id = {idx} img = {elem.img} tag = {elem.tag}/>
      })}
      </div>
  )
}

export default ImgCards
