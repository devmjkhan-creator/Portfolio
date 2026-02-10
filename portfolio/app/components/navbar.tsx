import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full sm:h-[8.60vh] h-[8vh] bg-[(--color-bg)] absolute  top-0  border-b-[#E3E4E8]   border-b flex items-center justify-center z-50'>
        <div className=' relative mx-auto w-full sm:max-w-[39.875em] border-r-[#E3E4E8] border-l-[#E3E4E8]  sm:border-r sm:border-l h-full items-center justify-between flex flex-row px-10'>
       
               <div>
                <h1 className=' font-medium text-[20px] text-[#14161c] tracking-[-4.6%] leading-[110%]'>aqib.</h1>
            </div>
            <div className='hidden sm:flex flex-row gap-[1.3em] font-normal text-[14px] tracking-[-0.4%] leading-5 text-[#7f8087]'>
                <p>UX Bites </p>
                 <p>Case Studies</p>
                 <p>Creative Lab</p>
                 <p>About</p>
            </div>
            <div className='sm:hidden cursor-pointer'>
              <img src="/pictures/menu.svg" alt="" />
            </div>
        
            
        </div>
      
    </div>
  )
}

export default Navbar