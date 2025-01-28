import React from 'react'
import Navbar from "../layouts/Navbar"
import Alltextupper from '../components/Alltextupper'
import WorkComp from "../components/WorkComp"
import Footer from "../layouts/Footer"
export default function Work() {
  return (
    <>
      <Navbar/>
      <section className='bg-[#000] text-white' >
       <Alltextupper mainheading="Our Work" subheading="Work"/>  
      </section>
       {/* Work component */}
       <WorkComp/>
       {/* Footer section here */}
     
    </>
  )
}