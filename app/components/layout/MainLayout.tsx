import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout