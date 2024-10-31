import React from 'react'

export default function Doccards({image, heading, paragraph}) {
  return (
    <div className=''>
        {image && <img src={image} alt='Doctor Visual' className='md:w-[400px] md:h-[400px] md:mt-16 mt-16cd'/>}
        <h3 className='font-medium text-2xl'>{heading}</h3>
        <p>{paragraph}</p>

    </div>
  )
}
