import React from 'react'

export default function Testimonials({image, text}) {
  return (
    <div className='flex md:item-center md:justify-center '>
        <div>
        {image && <img src={image} alt="Patients" className='w-[500px] h-[400px] '/>}
        </div>
       
        <p className='w-full border md:w-[600px]  md:text-4xl md:p-8'>{text}</p>

    </div>

  )
}
