import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[8.60vh] absolute  top-0  border-b-[#E3E4E8]   border-b flex items-center justify-center z-50'>
        <div className=' relative w-[39.875em] border-r-[#E3E4E8] border-l-[#E3E4E8]  border-r border-l h-full items-center justify-center flex flex-row'>
         <div className=' absolute left-9 flex items-center flex-row gap-[10.5em]'>
               <div>
                <h1 className=' font-medium text-[20px] text-[#14161c] tracking-[-4.6%] leading-[110%]'>aqib.</h1>
            </div>
            <div className='flex flex-row gap-[1.3em] font-normal text-[14px] tracking-[-0.4%] leading-5 text-[#7f8087]'>
                <p>UX Bites </p>
                 <p>Case Studies</p>
                 <p>Creative Lab</p>
                 <p>About</p>
            </div>
         </div>
            
        </div>
      
    </div>
  )
}

export default Navbar
// bg-(--color-bg) 