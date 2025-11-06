import React from 'react'
import image from '../assets/image.png'

const Card = (props) => {
  return (
    <div className='card'>
      <img className = "profileimg" src={image} alt="Card image" />
      <h1>Abhinandan {props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum</p>
      <button>Proceed</button>
    </div>
  )
}

export default Card
