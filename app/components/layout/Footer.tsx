import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoInstagram } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-neutral-900'>
      <div className='custom-container py-10 mt-10 flex items-center gap-4'>
        <Image
          src="/logo.svg"
          alt='tipsy padel medan'
          height={120}
          width={120}
          className='w-32 h-auto'
        />
        <div>
          <h4 className='font-mono font-bold uppercase text-xl'>Tipsy Padel - Medan Pride</h4>
          <p>Stay Padeling and Keep Dancing</p>
          <p>est. 2024</p>
          <Link href="https://www.instagram.com/tipsypadel" target='_blank' rel='noopener noreferrer' className='inline-flex gap-1 text-sm items-center bg-primary-pink font-semibold px-2 py-1 rounded-lg pb-1.5 mt-2'>
            <BiLogoInstagram size={20} />
            <p className='cursor-pointer'>tipsypadel</p>
          </Link>
        </div>
      </div>
      <hr className='border-neutral-500' />
      <div className='py-5 custom-container text-center'>
        <small className='text-white text-sm'>&copy; {new Date().getFullYear()} Tipsy Padel Medan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer