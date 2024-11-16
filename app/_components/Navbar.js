'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import Profile from '../../public/images/profile.png';
import Menu from '../../public/images/menu.png'
import Link from 'next/link';
import Container from './Container';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5"
import Button from './Button';


// const navlinks = [
//     { name: "Home"},
//     { name: "About Us"},
//     { name: "Services"},
//     { name:"Blog"},
// ];


export default function Navbar() {
  const [display, setDisplay] = useState(false);

  return (
    <header className="bg-background px-3 py-10 relative shadow-2xl">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">AhuiKE</div>

          <div className="text-[#f4f4f4] font-extrabold text-xl lg:hidden">
            {!display ? (
              <GiHamburgerMenu onClick={() => setDisplay(true)} size={28} />
            ) : (
              <IoCloseSharp onClick={() => setDisplay(false)} size={28} />
            )}
          </div>

          <nav
            className={`absolute left-0 top-[108px] w-full bg-background opacity-90 h-[70vh] lg:flex lg:relative lg:h-fit lg:top-0 lg:w-fit ${
              !display ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col justify-center items-center h-full gap-10 text-xl font-bold  lg:flex-row lg:w-fit lg:gap-20">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              
             <Link href="/contact"><Button text="Request a call"/></Link> 
            </ul>

          </nav>
        </div>
      </Container>
    </header>
  );
}