"use client"
import React, { useCallback, useState } from 'react'
import { Drawer } from '../ui/drawer';
import Image from 'next/image';
import Link from 'next/link';

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  
  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);
  
  const handleDismiss = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <button className="relative group" onClick={handleClick}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 duration-200">
          <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-primary-pink h-0.5 w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
            <div className="bg-primary-pink h-0.5 w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
            <div className="bg-primary-pink h-0.5 w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
              <div className="absolute bg-primary-pink h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
              <div className="absolute bg-primary-pink h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:-rotate-45"></div>
            </div>
          </div>
        </div>
      </button>
      <Drawer
        isOpen={open}
        className="w-80 bg-primary-black py-3 px-3"
        onDismiss={handleDismiss}
      >
        <nav>
          <div className='flex items-center gap-8 py-5'>
            <Image
              src="/logo.svg"
              alt='tipsy padel'
              height={80}
              width={80}
              className='h-15 w-auto'
            />
            <h1 className='font-mono uppercase font-bold text-2xl'>Tipsy Padel</h1>
          </div>
          <ul>
            <li className="">
              <Link
                onClick={() => setOpen(false)}
                className="flex w-full items-center gap-3 rounded-md p-3 text-white hover:bg-primary-pink/30 transition-all ease-in-out duration-300"
                href="/"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className="flex w-full items-center gap-3 rounded-md p-3 text-white hover:bg-primary-pink/30 transition-all ease-in-out duration-300"
                href="/events"
              >
                <span>Events</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className="flex w-full items-center gap-3 rounded-md p-3 text-white hover:bg-primary-pink/30 transition-all ease-in-out duration-300"
                href="/hall-of-fame"
              >
                <span>Hall of Fame</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  )
}

export default SidebarMenu