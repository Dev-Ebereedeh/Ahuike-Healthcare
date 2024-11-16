import React from 'react'

export default function Testimonials({image, heading, paragraph}) {
  return (
    <div className='flex md:flex-row flex-col md:item-center md:justify-center mx-auto md:mt-16'>
        <div>
        {image && <img src={image} alt="Patients" className='md:w-[600px] md:h-[600px] w-[300} h-[300] rounded-full  '/>}
        </div>
        <div>
        <h3 className='md:font-bold md: border-fuchsia-700 md:text-2xl md:-mb-24  '>{heading}</h3>
        <p className='w-full md:w-[800px] md:font-semibold text-gray-600 md:pt-32 md:p-12 p-8  md:text-4xl '>{paragraph}</p>
        </div>
        

    </div>

  )
}

