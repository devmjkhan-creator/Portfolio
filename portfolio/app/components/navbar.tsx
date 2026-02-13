import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <>
    <div className='w-full sm:h-[8.60vh] h-[8vh] bg-(--color-bg) fixed top-0 left-0 border-b-[#E3E4E8] border-b flex items-center justify-center z-80 font-inter'>
        <div className='relative mx-auto w-full max-w-[39.875em] border-r-[#E3E4E8] border-l-[#E3E4E8] sm:border-r sm:border-l h-full items-center justify-between flex flex-row px-5 sm:px-10'>
       
               <div>
                <Link href="/" className='inline-block'>
                  <h1 className=' font-medium text-[20px] text-[#14161c] tracking-[-4.6%] leading-[110%]'>aqib.</h1>
                </Link>
            </div>
            <div className='hidden sm:flex flex-row gap-[1.3em] font-normal text-[14px] tracking-[-0.4%] leading-5 text-[#7f8087]'>

            <Link href="/ux-bites" className="hover:text-[#14161c] transition-colors">
            UX Bites
            </Link>

            <Link href="/case-studies" className="hover:text-[#14161c] transition-colors">
            Case Studies
            </Link>

            <Link href="/creative-lab" className="hover:text-[#14161c] transition-colors">
            Creative Lab
            </Link>

            <Link href="/about" className="hover:text-[#14161c] transition-colors">
            About
           </Link>

</div>

            <div className='sm:hidden cursor-pointer'>
              <img src="/pictures/menu.svg" alt="" />
            </div>
        
            
        </div>
      
    </div>
    <div className='w-full sm:h-[8.60vh] h-[8vh]' aria-hidden="true" />
    </>
  )
}

export default Navbar
