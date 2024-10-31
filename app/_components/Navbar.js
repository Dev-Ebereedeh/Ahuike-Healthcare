import React from 'react'
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import Profile from '../../public/images/profile.png';
import Menu from '../../public/images/menu.png'
import Link from 'next/link';

// const navlinks = [
//     { name: "Home"},
//     { name: "About Us"},
//     { name: "Services"},
//     { name:"Blog"},
// ];


export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-8  py-[18px] border lg:mx-auto lg:px-24 bg-transparent'>
        <div > 
        <Image src={Logo} alt='Logo' width={70} height={70}/>
        </div>
        
        <div>
        <div className='flex gap-16'>
        <ul className='flex gap-16'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Services">Services</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        </ul> 
        </div>

        </div>
        


        <div className='flex gap-8 '>
            <div className='flex gap-8'>
                <Image src={Profile} alt='profile' width={50} height={50} className='hidden lg:block'/>
                <span className='hidden font-medium text-stone-50 border lg:block text-center px-auto hover:bg-white hover:text-[#172aa0] py-2 w-40 bg-[#172aa0] rounded-lg '>Sign in</span>
            </div>
            <div className='lg:hidden lg:width=[50px]'> 
                <Image src={Menu} alt='menu' width={50} height={50}/>
           </div>
           

        </div>
       
        


    </nav>
  )
}
