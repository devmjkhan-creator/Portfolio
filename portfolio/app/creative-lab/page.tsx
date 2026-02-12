import React from 'react'
import Navbar from '../components/navbar'
import Creativelabsec from '../sections/creativelabsec'
import Footer from '../components/footer'

const page = () => {
  return (
    <>
        <Navbar/>
        <div className='w-full min-h-screen  font-inter relativebg-[(--color-bg)] flex flex-col items-center'>
            <div className='w-full flex items-center justify-center  border-b border-b-(--color-border) '>
                <div className='w-full relative max-w-[39.875em] sm:border-r border-r-(--color-border) sm:border-l border-l-(--color-border)  sm:px-10 px-5 sm:pt-27 pt-20 sm:pb-25 pb-25 flex flex-col gap-7.5 sm:gap-16'>
                 <h1 className='text-(--color-text-black) tracking-[-0.6%] leading-5 text-[14px]'>Creative Lab</h1>
                <Creativelabsec/>
                </div>
            </div>
        </div>
        <Footer/>
      
    </>
  )
}

export default page
