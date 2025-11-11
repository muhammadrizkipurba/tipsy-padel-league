import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

const NotFoundPage = () => {
  return (
    <div className='min-h-[50vh] custom-container mt-3 pb-10'>
      <Image
        src="/images/tipsy-padel.png"
        alt=''
        height={500}
        width={500}
        className='rounded-xl w-full h-auto contrast-120'
      />
      <div className='mt-10 mb-5'>
        <h1 className='font-sans! text-center text-2xl'>Ooppss.. Page not found</h1>
        <p className='text-center mt-2'>We will bring the page you are looking for to the table as soon as possible...</p>
      </div>
      <div className='flex justify-center'>
        <Link href="/" className='inline-flex gap-1 text-sm items-center bg-primary-pink font-semibold px-2 py-1 rounded-lg pb-1.5'>
          <IoIosArrowRoundBack size={20} />
          <p className='cursor-pointer'>Back to home</p>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage