import React from 'react'

const Card = () => {
  return (
    <div className='h-[70vh] w-[30vh] relative bg-black text-white m-2 text-2xl rounded-4xl'>
      <img
  className='h-full w-full object-cover rounded-4xl'
  src='https://plus.unsplash.com/premium_photo-1673716788461-0aa43e5d2015?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974'
  alt='Scarlet macaw'
/>

      <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-5 rounded-4xl'>
        <h2 className='h-10 w-10 rounded-full bg-black text-white flex justify-center items-center '>1</h2>
        <div className='flex flex-col gap-14'>
            <p className='text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nostrum accusamus porro fugit laborum, ad odit vitae illo libero quisquam similique voluptatum nihil earum rerum incidunt tempore? Perspiciatis, quos corporis!</p>
        <div>
          <button className='bg-black text-white px-3 py-2 rounded-full'>Satisfied</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card
