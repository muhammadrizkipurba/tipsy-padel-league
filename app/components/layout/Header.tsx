import Image from 'next/image'
import React from 'react'
import SidebarMenu from './SidebarMenu'

const Header = () => {
  return (
    <header className='custom-container flex items-center justify-between py-5'>
      <Image 
        src="/logo.svg"
        alt='tipsy padel'
        height={80}
        width={80}
        className='h-15 w-auto'
      />
      <SidebarMenu />
    </header>
  )
}

export default Header