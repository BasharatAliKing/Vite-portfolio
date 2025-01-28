import React from 'react'

export default function Alltextupper(props) {
  return (   
    <div className='flex flex-col h-[60vh] mb-10 md:h-[80vh] tex-white  justify-center px-2 sm:px-5 md:px-10 xl:px-16'>
           <h1 className='main-heading font-saira'>{props.mainheading}</h1>
           <ul>
            <li className='flex gap-5 items-center'>
              <h3 className='text-[#d90a2c] text-lg font-saira'>Home</h3> 
              <img src="../public/arrow-right.svg" alt="" /> 
              <h2 className='font-saira text-lg '>{props.subheading}</h2></li>
           </ul>
        </div>
  )
}
