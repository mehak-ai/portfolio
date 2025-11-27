import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='text-center mt-16'>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                mehaksharmastu@gmail.com

            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Mehak Sharma. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://www.instagram.com/_callmemehak_/">Instagram</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/mehak-sharma-3974a5230/">LinkedIn</a></li>
                <li><a target='_blank' href="https://github.com/mehak-ai">GitHub</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer