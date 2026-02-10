import React from 'react'
import Dribble from '../public/pictures/dribble.svg'
import Dribblecard from '../public/pictures/dribblecard.svg'
import Linkiden from '../public/pictures/linkiden.svg'
import Linkidencard from '../public/pictures/linkidencard.svg'
import Twiter from '../public/pictures/twitter.svg'
import Twitercard from '../public/pictures/twittercard.svg'

const Footer = () => {
  return (
    <>
         {/* block5 */}
    <div className='w-full  flex items-center justify-center border-b border-b-(--color-border) '>
      <div className='w-[39.875em]  h-full border-r border-r-(--color-border) gap-[40.92px] flex flex-col items-center justify-center  border-l border-l-(--color-border) pt-[22vh] pb-[4vh]'>
        {/* button */}
        <button className='rounded-4xl w-[27.40vw] h-[16.70vh]  border-(--color-border) border'><h2 className='font-medium text-[48px] '>Work with me?</h2></button>

        {/* ............................ card & links............................... */}

        {/* container */}
        <div className='flex flex-row gap-[0.8vw] items-center justify-between'>
         {/* innerblock1... */}
           <div className='gap-[14.73px] flex flex-col items-center '>
            <div
            className='Card relative w-[6.20vw] h-[9.60vh] rounded-lg bg-center object-cover'>
            <img src="/pictures/twittercard.svg" alt="TwitterCard" className='w-full h-full bg-center object-cover ' />
             <div> <img src="/pictures/twitter.svg" alt="TwitterLogo" className='absolute bg-center object-cover -bottom-[1.2px] -left-[1.8vw]'/></div>
            </div>
           <button
           className=' text-[14px] w-[7vw] h-[4.40vh] bg-[#f4f4f4]  tracking-[-0.14%] leading-5 px-[22pxvw] py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>Twitter
           </button>
           </div>

           <div className='gap-[14.73px] flex flex-col items-center'>
            <div
             className='Card relative w-[6.20vw] h-[9.60vh] rounded-lg bg-center object-cover '>
               <img src="/pictures/dribblecard.svg" alt="DribbleCard" className='w-full h-full bg-center object-cover ' />
             <div> <img src="/pictures/dribble.svg" alt="Dribblelogo" className='absolute bg-center object-cover bottom-1 -left-[1.8vw]' /></div>
             </div>
       
           <button 
           className='text-[14px] w-[7vw] h-[4.40vh] bg-[#f4f4f4]  tracking-[-0.14%] leading-5 px-5.5 py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>Dribbble
           </button>
           </div>

           <div className='gap-[14.73px] flex flex-col items-center '>
            <div
             className='Card w-[6.20vw] relative h-[9.60vh] rounded-lg bg-center object-cover'>
               <img src="/pictures/linkidencard.svg" alt="DribbleCard" className='w-full h-full bg-center object-cover ' />
               <div><img src="/pictures/linkiden.svg" alt="Dribblelogo" className='absolute bg-center object-cover bottom-2 -left-[1.8vw]' /></div>
             </div>
           <button className='text-[14px] w-[7vw] h-[4.40vh] bg-[#f4f4f4]  tracking-[-0.14%] leading-5 px-5.5 py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>LinkedIn</button>
           </div>

        </div>
       
      </div>
    </div>
    {/* block6 */}
    <div className='w-full  flex items-center justify-center '>
      <div className='w-[39.875em] h-full border-r border-r-(--color-border)  border-l border-l-(--color-border) py-10 items-center flex justify-center'>
        <p className='text-[14px] tracking-[-0.6%] leading-5 text-(--color-text-dark)'>© 2026 Aqib.</p>
      </div>
    </div>
       
      
    </>
  )
}

export default Footer
