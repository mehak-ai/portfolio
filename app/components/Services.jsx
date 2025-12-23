import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I love creating meaningful, functional websites and exploring the world of data.
      </p>

      <div className='grid grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                       hover:bg-lighthover hover:-translate-y-1 hover:shadow-[2px_2px_6px_rgba(0,0,0,0.15)]
                       duration-500 transition-all'
          >
            <Image src={icon} alt={title} className='w-10 h-10 object-contain' width={40} height={40} />
            <h3 className='text-lg my-4 text-gray-700 font-Ovo'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 text-gray-700 hover:text-darkhover'>
              Read more <Image src={assets.right_arrow} alt="arrow" className='w-4 h-4' width={16} height={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
