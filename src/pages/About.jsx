import React from 'react'
import Navbar from '../layouts/Navbar'
import Alltextupper from '../components/Alltextupper'
import AboutComp from "../components/AboutComp"
import Footer from "../layouts/Footer"
export default function About() {
  return (
    <>
      <Navbar/>
      <section className='bg-[#000] text-white' >
       <Alltextupper mainheading="About Us" subheading="About Us"/>  
      </section>
      {/* Abouts here */}
      <AboutComp/>
      {/* Footer here */}
   
    </>
  )
}