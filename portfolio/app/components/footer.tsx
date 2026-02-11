import React from 'react'
import Dribble from '../public/pictures/dribble.svg'
import Dribblecard from '../public/pictures/dribblecard.svg'
import Linkiden from '../public/pictures/linkiden.svg'
import Linkidencard from '../public/pictures/linkidencard.svg'

import Twitercard from '../public/pictures/twittercard.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
         {/* block5 */}
    <div className='w-full  flex items-center justify-center border-b border-b-(--color-border) font-inter '>
      <div className='w-full sm:max-w-[39.875em]  h-full sm:border-r border-r-(--color-border)  sm:gap-[40.92px] gap-16 flex flex-col items-center justify-center  sm:border-l border-l-(--color-border) sm:pt-[22vh] pt-[13.70vh] pb-[4vh] sm:px-0 px-5'>
        {/* button */}
        <button className='rounded-4xl  sm:py-10 sm:px-10  py-6 px-10   border-(--color-border) border'><h2 className='font-medium sm:text-[48px] text-[24px] '>Work with me?</h2></button>

        {/* ............................ card & links............................... */}

        {/* container */}
        <div className='flex flex-row sm:gap-[0.8vw] gap-3 '>
         {/* innerblock1... */}


            {/* button1 */}
           <div className='gap-[14.73px] flex flex-col items-center  '>
            <div
            className='Card relative rounded-lg bg-center object-cover w-22.5 h-22.5 image-rendering-auto overflow-visible'>
            <img src="/pictures/twittercard.svg" alt="TwitterCard" className='w-full h-full bg-center object-cover overflow-visible ' />
             <div> <img src="/pictures/twitter.svg" alt="TwitterLogo" className="absolute -left-6 bottom-1 w-11 h-11 object-contain"/> </div>
            </div>
           <button
           className='mt-auto text-[14px] sm:w-[7vw] w-20 sm:h-[4.40vh] h-9 bg-[#F4F4F4]  tracking-[-0.14%] leading-5 sm:px-[22pxvw] px-5.5 sm:py-2 py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>Twitter
           </button>
           </div>


            {/* button2 */}
           <div className='gap-[14.73px] flex flex-col items-center'>
            <div
             className='Card relative rounded-lg bg-center object-cover w-22.5 h-22.5  image-rendering-auto  overflow-visible '>
               <img src="/pictures/dribblecard.svg" alt="DribbleCard" className='w-full h-full bg-center object-cover  overflow-visible  ' />
             <div> <img src="/pictures/dribble.svg" alt="Dribblelogo" className='w-11 h-11  overflow-visible  absolute bg-center object-contain bottom-1 -left-6 ' /></div>
             </div>
       
           <button 
           className=' mt-auto text-[14px]  sm:w-[7vw] w-20 sm:h-[4.40vh] h-9 bg-[#f4f4f4]  tracking-[-0.14%] leading-5 sm:px-[22pxvw] px-5.5 sm:py-2 py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>Dribbble
           </button>
           </div>


           {/* button3 */}
           <div className='gap-[14.73px] flex flex-col items-center '>
            <div
             className='Card  relative  rounded-lg bg-center object-cover  image-rendering-auto w-22.5 h-22.5  overflow-visible '>
               <img src="/pictures/linkidencard.svg" alt="LinkidenCard" className='w-full h-full bg-center object-cover  overflow-visible  ' />
               <div><img src="/pictures/linkiden.svg" alt="Linkidenlogo" className='absolute bg-center object-contain bottom-3 -left-6 ' /></div>
             </div>
           <button
            className='text-[14px]   sm:w-[7vw] w-20 sm:h-[4.40vh] h-9 bg-[#f4f4f4]  tracking-[-0.14%] leading-5 sm:px-[22pxvw] px-5.5 sm:py-2 py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>LinkedIn
            </button>
           </div>



        </div>
       
      </div>
    </div>






    {/* block6 */}
    <div className='w-full  flex items-center justify-center font-inter'>
      <div className='w-full sm:w-[39.875em] h-full sm:border-r border-r-(--color-border)  sm:border-l border-l-(--color-border) sm:py-10 py-8 items-center flex justify-center'>
        <p className='text-[14px] tracking-[-0.6%] leading-5 text-(--color-text-dark)'>© 2026 Aqib.</p>
      </div>
    </div>
       
      
    </>
  )
}

export default Footer