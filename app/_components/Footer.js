import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

export default function Footer() {
  return (
    <>
    <section className='bg-[#172aa0] w-full lg:h-5/6  lg:flex lg:justify-between text-white py-16 px-8 lg:px-16'>
    <div className='lg:w-2/12'>
     <div className='border '>
       <Image src={Logo} alt='Logo' className='hidden lg:block lg:w-[50px] lg:h-[50px]'/>
       <h3 className='font-extrabold text-3xl  w-[500px] lg:w-[500px] lg:font-bold m-8'>AhuiKe</h3>
       <h4  className='text-2xl font-san lg:text-pink-600 hidden lg:block'>Digital System</h4>
      </div>
      <p className='font-sans text-2xl border font-medium lg:text-sm lg:w-[200px]'>At AhuiKe Hospital, we are dedicated to providing exceptional, compassionate healthcare services that you can trust. Our team of expert doctors, nurses</p>
   
    </div>
    
    
    
    

    
    
    
  <div>
    <h6  className='text-xl font-semibold opacity-15'>Products</h6>
    <ul className='font-sans text-sm'>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Blog</li>
    </ul>
    

    <div className='pt-8'>
    <h6 className='text-xl font-semibold opacity-15'>Resources</h6>
    <ul className='font-sans text-sm'>
    <li>Blog Details</li>
    <li>Service Details </li>
    <li>404 Page</li>
    <li>Password</li>
    </ul>

    </div>
    
   </div>

    <div>
        <h6  className='text-xl font-semibold opacity-15'>Company</h6>
        <ul className='font-sans text-sm'>
            <li>Contact</li>
            <li>License</li>
            <li>Change log</li>
        </ul>


    </div>

  
   

    </section>
    </>
  )
}
