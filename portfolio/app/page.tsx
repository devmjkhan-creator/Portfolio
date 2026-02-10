import React from 'react'
import Navbar from './components/navbar'
import Profileimg from '../public/pictures/profileimg.png'
import Ellip1 from '../public/pictures/ellip1.png'
import Ellip2 from '../public/pictures/ellip2.png'
import Ellip3 from '../public/pictures/ellip3.png'
import Ellip4 from '../public/pictures/ellip4.png'
import Ellip5 from '../public/pictures/ellip5.png'
import Polygon from '../public/pictures/polygon.png'
import CaseStudies from './sections/casestudy'
import Logo1 from '../public/pictures/logo1.svg'
import Logo2 from '../public/pictures/logo2.svg'
import Logo3 from '../public/pictures/logo3.svg'
import Logo4 from '../public/pictures/logo4.svg'
import Logo5 from '../public/pictures/logo5.svg'
import Dribble from '../public/pictures/dribble.svg'
import Dribblecard from '../public/pictures/dribblecard.svg'
import Linkiden from '../public/pictures/linkiden.svg'
import Linkidencard from '../public/pictures/linkidencard.svg'
import Twiter from '../public/pictures/twitter.svg'
import Twitercard from '../public/pictures/twittercard.svg'




const page = () => {
  return (
    <>
    <Navbar/>
  <div className='relative w-full top-[8.6vh] min-h-screen flex flex-col'>


    {/* block1 */}
    <div className='w-full    relative flex items-center justify-center border-b border-b-(--color-border) '>

      <div className='w-full max-w-[39.875em]  relative pb-8 border-r border-r-(--color-border)  border-l border-l-(--color-border) px-[2.3em]'>
         {/* home heading */}
        <div className='  mt-[19.50vh]  flex flex-col items-center justify-center gap-5'>
         <div><img src='/pictures/profileimg.png' alt="Profile" className=" object-cover bg-center" /></div>
         <div className='flex items-center justify-center flex-col gap-4'>
          <h1 className="font-caveat text-[#62636a] text-[20px] font-normal tracking-[-0.14%]">Hey, I’m Aqib</h1>
          <p className='text-[16px] tracking-[-0.14%] leading-[155%] text-center'>With 4+ years of experience designing B2B SaaS <br /> products,<span className='ml-1'> I’ve designed experiences across SaaS, </span><br /> <span>fintech, and ERP platforms.</span></p>
         </div>
        </div>
        {/* home bottom para */}
        <div className='w-full  h-[1em] mt-[25.80vh] flex flex-row items-center justify-between text-[#14161c]'>
           <p className='text-[14px]'>02:00 <span className='ml-0.5'>PM</span></p>
           <p className='text-[14px]'>CONTACT ME</p> 
        </div>

         {/* Theme Changer */}
     <div className=' absolute  top-[20.90vh] -right-16.5 rounded-full gap-2 p-2 border border-(--color-border) flex items-center  flex-col '>
      {/* selector */}
    <div 
    className='absolute right-[-0.9em] rounded-full'
    style={{ top: 'calc(31% - 12px)' }} >
      <img src={Polygon.src} alt="Selector" className="object-cover bg-center" />
    </div>

      <div className='border border-(--color-border)  w-5.5 h-5.5  rounded-full  '>
      </div>
      <div className='border border-(--color-border) w-5.5 h-5.5 rounded-full object-cover bg-center '>
        <img src={Ellip1.src} alt="Theme 1" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-5.5 h-5.5 rounded-full object-cover bg-center '>
        <img src={Ellip2.src} alt="Theme 2" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-5.5 h-5.5 rounded-full object-cover bg-center '>
        <img src={Ellip3.src} alt="Theme 3" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-5.5 h-5.5 rounded-full object-cover bg-center '>
        <img src={Ellip4.src} alt="Theme 4" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-5.5 h-5.5 rounded-full object-cover bg-center '>
        <img src={Ellip5.src} alt="Theme 5" className='object-cover w-full h-full' />
      </div>
     </div>
      </div>

    </div>


    {/* block2 */}
    <div className='w-full  flex items-center justify-center border-b border-b-(--color-border) '>
      <div className='w-[39.875em]  h-full border-r border-r-(--color-border) px-10  border-l border-l-(--color-border) pt-[12.20vh] pb-10 flex flex-col items-center justify-center'>
       <p className='tracking-[-0.14%] leading-5 text-[14px] '>Casestudies</p>
        {/* Innerblock */}

         <CaseStudies/>
        <p className='mt-10 text-(--color-primary-text) tracking-[-0.14%] leading-5 text-[14px] '>Click to see</p>
      </div>
    </div>


    {/* block3 */}
    <div className='w-full   flex items-center justify-center border-b border-b-(--color-border)'>
      <div className='w-[39.875em]   border-r gap-16.25 border-r-(--color-border)  border-l border-l-(--color-border) px-18 py-25 flex items-center justify-center flex-col'>
        <h1 className='text-[14px]'>What I Do</h1>
        <div className='text-[14px] text-[#525866] flex flex-col gap-7'>
        <p className='tracking-[-0.14%] leading-[185%] text-center'>  I design digital products that are simple, clear, and user-focused.</p>
        <p className='text-center tracking-[-0.14%] leading-[185%]'> My work includes websites, web apps, and product interfaces where <br /> usability and visual balance matter most. I care about how things look, but <br /> more importantly, how they work for real users.</p>
        <p className='text-center tracking-[-0.14%] leading-[185%]'> I’m constantly learning, refining my skills, and pushing my designs to be <br /> better with every project.</p>
        </div>
      </div>
    </div>



    {/* block4 */}
    <div className='w-full   flex items-center justify-center border-b border-b-(--color-border)'>
      <div className='w-[39.875em]  py-[12.30vh]  gap-[7.80vh] border-r border-r-(--color-border) flex-col  border-l border-l-(--color-border) flex items-center '>
        <h1 className='text-[14px] tracking-[-0.14%] leading-5 text-(--color-primary-text)'>Work Experience</h1>

        {/* InnerblockS */}
         <div className=' w-full px-10 text-[14px] gap-8 flex flex-col justify-around text-(--color-primary-text) '>


          {/* innerblock1 */}
          <div className='flex flex-row pb-8 justify-between border-b-(--color-border) border-b'>
            <div className=''><p className='flex flex-row tracking-[-0.14%] leading-5'>Product Designer <span className='ml-2 flex items-center tracking-[-0.14%] leading-5 text-(--color-text-muted)'>at</span>    <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'> 
              <img src={Logo1.src} alt="CreativeOS Logo" className='w-5 h-5 ' /></span>
                <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>CreativeOS</span></p></div>
            <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-muted)'>Present</p></div>
          </div>

            {/* innerblock2 */}
            <div className='flex flex-row pb-8  border-b-(--color-border) border-b justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'>Freelance Product Designer  <span className='ml-2 tracking-[-0.14%] leading-5 flex items-center text-(--color-text-muted)'>at</span> 
               <span className='ml-2 flex items-center w-5 h-5 rounded-full overflow-hidden'>
                <img src={Logo2.src} alt="Upwork Logo" /></span> 
                 <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>Upwork</span> </p></div>
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-muted)'>Present</p></div>
            </div>

                 {/* innerblock3 */}
            <div className='flex flex-row pb-8 border-b-(--color-border) border-b justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'>Product Designer <span className='ml-2 flex items-center tracking-[-0.14%] text-(--color-text-muted) leading-5'>at</span>   <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'><img src={Logo5.src} alt="KUST Logo" /></span> <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'> KUST - FYP </span></p></div> 
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-muted)'>2021 - 2023</p></div>
            </div>
         
               {/* innerblock4 */}
            <div className='flex flex-row pb-8 border-b-(--color-border) border-b justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'> UXUI Designer <span className='ml-2 tracking-[-0.14%] leading-5 flex items-center text-(--color-text-muted)'>at</span>  <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'><img src={Logo3.src} alt="Infusible Coders Logo" /></span> <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>Infusible Coders</span> </p></div>
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-muted)'>2021 - 2023</p></div>
            </div>

              {/* innerblock5 */}
            <div className='flex flex-row justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'>Graphic & UI Designer <span className='ml-2 tracking-[-0.14%] leading-5 flex items-center text-(--color-text-muted)'>at</span>  <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'><img src={Logo4.src} alt="94 Productions Logo" /></span> <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>94 Productions</span> </p></div>
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-muted)'>2020 - 2023</p></div>
            </div>


        </div>
      </div>
    </div>



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
            <img src={Twitercard.src} alt="TwitterCard" className='w-full h-full bg-center object-cover ' />
             <div> <img src={Twiter.src} alt="TwitterLogo" className='absolute bg-center object-cover -bottom-[1.2px] -left-[1.8vw]'/></div>
            </div>
           <button
           className=' text-[14px] w-[7vw] h-[4.40vh] bg-[#f4f4f4]  tracking-[-0.14%] leading-5 px-[22pxvw] py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>Twitter
           </button>
           </div>

           <div className='gap-[14.73px] flex flex-col items-center'>
            <div
             className='Card relative w-[6.20vw] h-[9.60vh] rounded-lg bg-center object-cover '>
               <img src={Dribblecard.src} alt="DribbleCard" className='w-full h-full bg-center object-cover ' />
             <div> <img src={Dribble.src} alt="Dribblelogo" className='absolute bg-center object-cover bottom-1 -left-[1.8vw]' /></div>
             </div>
       
           <button 
           className='text-[14px] w-[7vw] h-[4.40vh] bg-[#f4f4f4]  tracking-[-0.14%] leading-5 px-5.5 py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>Dribbble
           </button>
           </div>

           <div className='gap-[14.73px] flex flex-col items-center '>
            <div
             className='Card w-[6.20vw] relative h-[9.60vh] rounded-lg bg-center object-cover'>
               <img src={Linkidencard.src} alt="DribbleCard" className='w-full h-full bg-center object-cover ' />
               <div><img src={Linkiden.src} alt="Dribblelogo" className='absolute bg-center object-cover bottom-2 -left-[1.8vw]' /></div>
             </div>
           <button className='text-[14px] w-[7vw] h-[4.40vh] bg-[#f4f4f4]  tracking-[-0.14%] leading-5 px-5.5 py-2 border-l border-r rounded-4xl border-[#f4f4f4] border-t border-b items-center flex justify-center'>LinkedIn</button>
           </div>

        </div>
       
      </div>
    </div>
    {/* block6 */}
    <div className='w-full  flex items-center justify-center '>
      <div className='w-[39.875em] h-full border-r border-r-(--color-border)  border-l border-l-(--color-border) py-10 items-center flex justify-center'>
        <p className='text-[14px] tracking-[-0.6%] leading-5 text-(--color-text-muted)'>© 2026 Aqib.</p>
      </div>
    </div>
       

 
  </div>
  

     </>
  )
}

export default page
