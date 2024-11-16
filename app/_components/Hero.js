import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Hero({image}) {
  return (
    <div id="Tro">
  {image && (
    <Image
      src={image}
      alt="Background"
      fill
      className="object-cover"
      style={{ width: '100%', height: '100%' }}
    />
  )}
</div>
  )
  
}
