import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='flex flex-col '>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body