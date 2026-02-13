import React from 'react'
import Navbar from '../components/navbar'
import Casepagesec from '../sections/casepagesec'
import Footer from '../components/footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full min-h-screen relative flex items-center  flex-col bg-[(--color-bg)] font-inter'>
       <div className='w-full flex items-center justify-center  border-b border-b-(--color-border) '>
        {/* main container type:Center */}
        <div className='w-full relative max-w-[39.875em] items-center justify-center  sm:border-r border-r-(--color-border) sm:border-l border-l-(--color-border)  sm:px-10 px-5 sm:pt-27 pt-20 sm:pb-25 pb-25 flex flex-col gap-7.5 sm:gap-16'>
            <div className='flex flex-col sm:gap-16 gap-10 w-full '>
                <p className='text-[14px] tracking-[-0.14%] leading-5 text-[#2B2B32]'>Casestudies</p>


                {/* block container */}
               <Casepagesec/>


            </div>
            <p className='text-[#14161B] text-[14px] tracking-[-0.14%] leading-5'>Cooking more...</p>
           
        </div>
       </div>

       <Footer/>
     
    </div>
    
    </>
  )
}

export default page
