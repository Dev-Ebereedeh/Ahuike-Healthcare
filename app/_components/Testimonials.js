import React from 'react'

export default function Testimonials({image, text}) {
  return (
    <div className='flex md:flex-row flex-col md:item-center md:justify-center '>
        <div>
        {image && <img src={image} alt="Patients" className='md:w-[600px] md:h-[600px] w-[300} h-[300] rounded-full'/>}
        </div>
       
        <p className='w-full md:w-[800px] md:font-semibold text-gray-600 md:pt-32 p-8   md:text-4xl md:p-8'>{text}</p>

    </div>

  )
}
