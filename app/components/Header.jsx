import React from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='w-11/12 mx-auto mt-24 mb-8 text-center flex flex-col items-center gap-4 md:gap-6'>
      <div>
        <Image src={assets.profile_img} alt='' className='w-24 rounded-full' />
      </div>

      <h3 className='flex items-end gap-2 text-base md:text-lg mb-2 font-Ovo'>
        Hi I'm Mehak <Image src={assets.hand_icon} alt='' className='w-7' />
      </h3>

      <h1 className='text-lg sm:text-xl lg:text-2xl font-Ovo max-w-2xl'>
        aspiring web developer and data enthusiast based in Noida.
      </h1>

      <p className='max-w-xl mx-auto text-xs md:text-sm font-Ovo'>
        I love creating meaningful, functional websites and exploring the world of data.
      </p>

      <div className='flex flex-wrap gap-3 mt-3'>
        <a 
          href="#contact"
          className='px-4 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2 text-sm md:text-base'
        >
          contact me <Image src={assets.right_arrow_white} alt='' className='w-3' />
        </a>

        <a 
          href="/sample-resume.pdf" download
          className='px-4 py-2 border rounded-full border-gray-500 flex items-center gap-2 text-sm md:text-base'
        >
          my resume <Image src={assets.download_icon} alt='' className='w-3' />
        </a>
      </div>
    </div>
  );
};

export default Header;
