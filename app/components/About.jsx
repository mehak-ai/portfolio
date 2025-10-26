import { assets, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { title } from 'process'
const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center
        gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' 
                className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
                <p className='mb-10 mx-w-2xl font-Ovo'>
                Hello! I'm Mehak, an aspiring web developer and data enthusiast based in Noida. I have a passion for creating meaningful, functional websites and exploring the world of data. 
                With a strong foundation in HTML, CSS, JavaScript, and React, I enjoy building responsive and user-friendly web applications. 
                Additionally, my interest in data analytics drives me to uncover insights and make data-driven decisions.
                </p>

               <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
  {infoList.map(({ icon, iconDark, title, description }, index) => (
    <li
      key={index}
      className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                 hover:bg-lighthover hover:-translate-y-1 duration-500 transition-all'
      style={{
        transition: 'all 0.5s ease',
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Image src={icon} alt={title} className='w-8 mt-3' />
      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
      <p className='text-gray-600 text-sm'>{description}</p>
    </li>
  ))}
</ul>


                <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                <ul className='flex items-center gap-2 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <li className='flex items-center justify-center
                        w-12 sm:w-14 aspect-square border border-gray-400
                        rounded-lg cursor-pointer' key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About