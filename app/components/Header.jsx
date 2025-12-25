import React from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 mx-auto mt-24 mb-8 text-center flex flex-col items-center gap-4 md:gap-6'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='w-36 rounded-full' />
      </motion.div>

      <motion.h3 
      initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6}}
      className='flex items-end gap-2 text-base md:text-lg mb-2 font-Ovo'>
        Hi I'm Mehak <Image src={assets.hand_icon} alt='' className='w-7' />
      </motion.h3>

      <motion.h2 
      initial={{ y:-30, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      className='text-2xl sm:text-4xl lg:text-[50px] font-Ovo'>
        aspiring web developer and data enthusiast based in Noida.
      </motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
       className='max-w-xl mx-auto text-xs md:text-sm font-Ovo'>
        I love creating meaningful, functional websites and exploring the world of data.
      </motion.p>

      <div className='flex flex-wrap gap-3 mt-3'>
        <a 
          href="#contact"
          className='px-4 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2 text-sm md:text-base'
        >
          contact me <Image src={assets.right_arrow_white} alt='' className='w-3' />
        </a>

        <a 
          href="/MehakSharmaResume.pdf" download
          className='px-4 py-2 border rounded-full border-gray-500 flex items-center gap-2 text-sm md:text-base'
        >
          my resume <Image src={assets.download_icon} alt='' className='w-3' />
        </a>
      </div>
    </div>
  );
};

export default Header;
