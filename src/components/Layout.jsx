import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div className='bg-[#FBFBFD]'>
        <Navbar/>
        <div className=''>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
