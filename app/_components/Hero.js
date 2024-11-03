import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Hero({image}) {
  return (
    <div id='Tro'> 
    {image && <img src="https://res.cloudinary.com/dluyb8eyq/image/upload/v1730447864/modern-blue-wavy-shape_1035-6611_l6uhbn.jpg" alt='Background' className='w-[1000]' fill={true}/>}
    </div>
    
  )
}

