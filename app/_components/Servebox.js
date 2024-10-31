import React from 'react'

export default function Servebox({heading, paragraph, image}) {
  return (
    <div>
        <div className='md:w-[500px] mx-16 relative z-0 pt-24 hidden md:block md:rounded-lg'>
        {image && <img src={image} alt='service box' />} 
        </div>
        
        <div className='hidden md:block bg-red  text-center  md:w-[400px] md:h-[220px] p-8 md:p-8 mx-28 bg-white -mt-24 relative z-10 mb-8'>
            <h4 className='text-xl md:text-2xl font-semibold '>{heading}</h4>
            <p className='font-regular text-gray-700 md:texl-xl'>{paragraph}</p>

        </div>
       

    </div>
  )
}
