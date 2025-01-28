import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
     <Navbar/>
     <Outlet/>
     <Footer/> 
    </div>
  )
}

export default Layout
