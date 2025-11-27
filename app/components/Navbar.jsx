import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(scrollY>50){
        setIsScroll(true);
      }
      else{
        setIsScroll(false);
      }
    })
  },[]); 

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'></div>
      <nav className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between bg-white shadow-md z-50
      ${isScroll ? " backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
        </a>

        <ul className={`hidden md:flex item-center gap-4 lg:gap-6 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#services">Services</a></li>
          <li><a className='font-Ovo' href="#work">My Work</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <a href="#contact" className='font-Ovo hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
            Contact <Image src={assets.arrow_icon} className='w-3' alt=''/>
          </a>
          <button onClick={openMenu} className='block md:hidden ml-3'>
            <Image src={assets.menu_black} className='w-5' alt=''/>
          </button>
        </div>

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50
        h-screen bg-rose-50 transition duration-500'>
          <div onClick={closeMenu} className='absolute right-6 top-6'>
            <Image src={assets.close_black} alt='' className='w-3 mb-16 cursor-pointer'/>
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
