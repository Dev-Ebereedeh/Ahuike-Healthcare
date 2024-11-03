import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import Link from  'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <>
    <Container>
    <section className='bg-[#172aa0] w-full lg:h-5/6  lg:flex lg:justify-between text-white py-16 px-8 lg:px-16'>
    <div className='lg:w-2/12'>
     <div className='  flex  justify-start '>
       <div className=' w-[80px] h-[80px] md:w-[100px] md:h-[100px]'>
      <Image src={Logo} alt='Logo'/>
       </div>
       
       <div>
       <h3 className='font-extrabold text-xl color-gradient-to-r from-blue-800 to-blue-500 md:text-3xl rounded w-[70px] md:w-[120px] md:font-bold m-8'>AhuiKe</h3>
       {/* <h4  className='text-2xl font-san lg:text-pink-600 hidden lg:block'>Digital Systems</h4> */}
       </div>
       
      </div>
      <p className='font-sans pb-8 text-xl font-medium md:font-normal md:w-[300px] md:text-xl'>We are dedicated to providing exceptional, compassionate healthcare services that you can trust. Our team of expert doctors, nurses</p>
   
    </div>

  <div>
    <h6  className='text-2xl font-semibold opacity-15'>Products</h6>
    <ul className='font-sans font-medium text-xl md:font-normal md:pt-8'>
    <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Services">Services</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
    </ul>
    

    <div className='pt-8'>
    <h6 className='text-2xl font-bold opacity-15 '>Resources</h6>
    <ul className='font-sans font-medium text-xl pb-8 md:font-normal md:pt-8'>
    <li>Blog Details</li>
    <li>Service Details </li>
    <li>404 Page</li>
    <li>Password</li>
    </ul>

    </div>
    
   </div>

    <div>
        <h6  className='text-2xl font-bold opacity-15'>Company</h6>
        <ul className='font-sans font-medium text-xl pb-8 md:font-normal md:pt-8'>
            <li>Contact</li>
            <li>License</li>
            <li>Change log</li>
        </ul>
    </div>

    <div>

    <div className='flex gap-8 pt-8'>
    <img src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" className=' width="30" height="30"'/>
    <img src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" className=' width="50" height="50"'/>
    <img  src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" className='width="30" height="30"'/>
    <img src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="tiktok--v1" className=' width="30" height="30"'/>
    </div>
      
    <div className='flex justify-center items-center pt-24 '>
    <img src="https://img.icons8.com/?size=100&id=3723&format=png&color=ffffff" alt="marker--v1" className='w-[70px] h-[70px]'/>
    <div>
    <p className='text-xl'>123 Victoria Island Road, Victoria Island, Lagos, Nigeria.</p>
     <p className='text-xl font-semibold'>+234 7045678243</p>
    </div>

    </div>
    

    
    </div>

    

    
  </section>

    </Container>
    

</>
  )
}
