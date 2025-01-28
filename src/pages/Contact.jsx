import React from 'react'
import Navbar from '../layouts/Navbar'
import Alltextupper from '../components/Alltextupper'
import ContactComp from "../components/ContactComp"
import Footer from '../layouts/Footer'
export default function Contact() {
  return (
    <>
       <Navbar/>
      <section className='bg-[#000] text-white' >
       <Alltextupper mainheading="Contact Us" subheading="Contact"/>  
      </section>
      {/* About us here */}
      <ContactComp/>
      {/* Footer here */}
   
    </>
  )
}