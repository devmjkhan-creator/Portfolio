import React from 'react'
import Navbar from '../components/navbar'
import Uxbitesdata from '../sections/uxbitesdata'
import Footer from '../components/footer'

const uxbites = () => {
  return (
   
    <>
         <Navbar/>
         <div className='w-full min-h-screen relative flex items-center  flex-col bg-[(--color-bg)]'>
          {/* Container */}
          <div className='w-full flex items-center justify-center border-b border-b-(--color-border)'>
            <div className='w-full max-w-[39.875em] sm:px-10 px-5 sm:pt-27 py-20 sm:pb-25  sm:gap-16 gap-10 flex flex-col mx-auto relative  sm:border-r border-r-(--color-border) sm:border-l border-l-(--color-border)'>
              <p className='tracking-[-0.14%] leading-5 text-[14px] text-[#2B2B32]'>UX Bites</p>
              {/* block */}
              <Uxbitesdata/>
            </div>
          </div>
           <Footer/>
         </div>
        
      
    </>
  )
}

export default uxbites
