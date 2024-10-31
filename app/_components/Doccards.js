import React from 'react'

export default function Doccards({image, heading, paragraph}) {
  return (
    <div >
        <div className='md:w-[600px] md:h-[600px]  mt-16'>
        {image && <img src={image} alt='Doctor Visual' />}
        </div>
        <div className='md: -mt-40'>
        <h3 className='font-medium text-2xl'>{heading}</h3>
        <p className='md:pb-16'>{paragraph}</p>

        </div>
        

    </div>
  )
}
