import React from 'react'

const CardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-5 rounded-4xl'>
        <h2 className='h-10 w-10 rounded-full bg-white text-black flex justify-center items-center font-bold'>
            {props.id+1}
        </h2>
        <div className='flex flex-col gap-16'>
            <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nostrum accusamus porro fugit laborum</p>
        <div>
          <button className='bg-white text-black px-4 py-1 rounded-full font-bold'>{props.tag}</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CardContent
