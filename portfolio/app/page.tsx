import React from 'react'
import Navbar from './components/navbar'
import Profileimg from '../public/pictures/profileimg.svg'
import Ellip1 from '../public/pictures/ellip1.png'
import Ellip2 from '../public/pictures/ellip2.png'
import Ellip3 from '../public/pictures/ellip3.png'
import Ellip4 from '../public/pictures/ellip4.png'
import Ellip5 from '../public/pictures/ellip5.png'
import Polygon from '../public/pictures/polygon.svg'
import CaseStudies from './sections/casestudy'
import Logo1 from '../public/pictures/logo1.svg'
import Logo2 from '../public/pictures/logo2.svg'
import Logo3 from '../public/pictures/logo3.svg'
import Logo4 from '../public/pictures/logo4.svg'
import Logo5 from '../public/pictures/logo5.svg'
import Footer from './components/footer'

const page = () => {
  return (
    <>
    <Navbar/>
  <div className='relative w-full  min-h-screen  flex flex-col bg-[(--color-bg)]'>


    {/* block1 */}
    <div className='w-full relative flex items-center justify-center border-b border-b-(--color-border)'>

      <div className='w-full max-w-[39.875em] mx-auto relative sm:pb-8 pb-25 sm:border-r border-r-(--color-border) px-5 sm:px-[2.3em]  sm:border-l border-l-(--color-border)'>
         {/* home heading */}
        <div className='  sm:mt-[19.50vh]  flex flex-col items-center justify-center gap-5 mt-20'>
         <div><img src='/pictures/profileimg.svg' alt="Profile" className=" object-cover bg-center" /></div>
         <div className='flex items-center justify-center flex-col gap-4  sm:px-19 px-0'>
          <h1 className="font-caveat text-[#62636a] text-[20px] font-normal tracking-[-0.14%]">Hey, I’m Aqib</h1>
          <p className='text-[16px] tracking-[-0.14%] leading-[155%] text-center '>
              <span className='block sm:hidden'>
                With 4+ years of experience designing <br />
               B2B SaaS products, I’ve designed <br />
                 experiences across SaaS, fintech, <br />
                and ERP platforms.
                </span>
            <span className='hidden sm:inline'>With 4+ years of experience designing B2B SaaS products, I’ve designed experiences across SaaS, fintech, and ERP platforms.</span>
            </p>
         </div>
        </div>
        {/* home bottom para */}
        <div className='w-full hidden sm:flex h-[1em] mt-[25.80vh]  flex-row items-center justify-between text-[#14161c]'>
           <p className='text-[14px] tracking-[-0.14%] leading-5'>02:00 <span className='ml-0.5'>PM</span></p>
           <p className='text-[14px] tracking-[-0.14%] leading-5'>CONTACT ME</p> 
        </div>

         {/* Theme Changer */}
     <div className=' absolute  top-[20.90vh] -right-16.5 rounded-full gap-2 p-2 border border-(--color-border) hidden sm:flex items-center  flex-col '>
      {/* selector */}
    <div 
    className='absolute right-[-0.7em] rounded-full'
    style={{ top: 'calc(31% - 12px)' }} >
      <img src={Polygon.src} alt="Selector" className="object-cover bg-center" />
    </div>

      <div className='border border-(--color-border)  w-6 h-6  rounded-full  '>
      </div>
      <div className='border border-(--color-border) w-6 h-6 rounded-full object-cover bg-center '>
        <img src={Ellip1.src} alt="Theme 1" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-6 h-6 rounded-full object-cover bg-center '>
        <img src={Ellip2.src} alt="Theme 2" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-6 h-6 rounded-full object-cover bg-center '>
        <img src={Ellip3.src} alt="Theme 3" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-6 h-6 rounded-full object-cover bg-center '>
        <img src={Ellip4.src} alt="Theme 4" className='object-cover w-full h-full' />
      </div>
      <div className='border border-(--color-border) w-6 h-6 rounded-full object-cover bg-center '>
        <img src={Ellip5.src} alt="Theme 5" className='object-cover w-full h-full' />
      </div>
     </div>
      </div>

    </div>


    {/* block2 */}
    <div className='w-full  flex items-center justify-center border-b border-b-(--color-border) '>
      <div className='w-full sm:w-[39.875em]  h-full sm:border-r border-r-(--color-border) px-10 sm:py-[12.30vh] py-[13.80vh]  sm:border-l border-l-(--color-border) flex flex-col items-center justify-center'>
       <p className='tracking-[-0.14%] leading-5 text-[14px] '>Casestudies</p>
        {/* Innerblock */}

         <CaseStudies/>
      </div>
    </div>


    {/* block3 */}
    <div className='w-full   flex items-center justify-center border-b border-b-(--color-border)'>
      <div className='w-full sm:w-[39.875em]   sm:border-r gap-16.25 border-r-(--color-border) sm:border-l border-l-(--color-border) sm:px-18 px-10 sm:py-25 py-[13.80vh] flex items-center justify-center flex-col'>
        <h1 className='text-[14px]'>What I Do</h1>
        <div className='text-[14px] text-[#46484E] flex flex-col gap-7'>
        <p className='tracking-[-0.14%] leading-[185%] text-center'>  I design digital products that are simple, clear, and user-focused.</p>
        <p className='text-center tracking-[-0.14%] leading-[185%]'>My work includes websites, web apps, and product interfaces where usability and visual balance matter most. I care about how things look, but more importantly, how they work for real users.</p>
        <p className='text-center tracking-[-0.14%] leading-[185%] sm:ml-0 ml-[9.48px]'> I’m constantly learning, refining my skills, and pushing my designs to be better with every project.</p>
        </div>
      </div>
    </div>



    {/* block4 */}
    <div className='w-full   flex items-center justify-center border-b border-b-(--color-border)'>
      <div className='w-full  sm:w-[39.875em]  sm:py-[12.30vh] py-[13.80vh]  gap-[7.80vh] sm:border-r border-r-(--color-border) flex-col  sm:border-l border-l-(--color-border) flex items-center sm:px-0 px-5'>
        <h1 className='text-[14px] tracking-[-0.14%] leading-5 text-(--color-primary-text)'>Work Experience</h1>

        {/* InnerblockS */}
         <div className=' w-full px-10 text-[14px] gap-8 flex flex-col justify-around text-(--color-primary-text) '>


          {/* innerblock1 */}
          <div className='flex sm:flex-row flex-col gap-4 sm:gap-0 pb-8 justify-between border-b-(--color-border) border-b'>
            <div className=''><p className='flex flex-row tracking-[-0.14%] leading-5'>Product Designer <span className='ml-2 flex items-center tracking-[-0.14%] leading-5 text-(--color-text-dark)'>at</span>    <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'> 
              <img src={Logo1.src} alt="CreativeOS Logo" className='w-5 h-5 ' /></span>
                <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>CreativeOS</span></p></div>
            <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-dark) uppercase'>Present</p></div>
          </div>

            {/* innerblock2 */}
            <div className='flex sm:flex-row flex-col gap-4 sm:gap-0 pb-8  border-b-(--color-border) border-b justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'>Freelance Product Designer  <span className='ml-2 tracking-[-0.14%] leading-5 flex items-center text-(--color-text-dark)'>at</span> 
               <span className='ml-2 flex items-center w-5 h-5 rounded-full overflow-hidden'>
                <img src={Logo2.src} alt="Upwork Logo" /></span> 
                 <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>Upwork</span> </p></div>
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-dark) uppercase'>Present</p></div>
            </div>

                 {/* innerblock3 */}
            <div className='flex sm:flex-row flex-col gap-4 sm:gap-0 pb-8 border-b-(--color-border) border-b justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'>Product Designer <span className='ml-2 flex items-center tracking-[-0.14%] text-(--color-text-dark) leading-5'>at</span>   <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'><img src={Logo5.src} alt="KUST Logo" /></span> <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'> KUST - FYP </span></p></div> 
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-dark)'>2021 - 2023</p></div>
            </div>
         
               {/* innerblock4 */}
            <div className='flex sm:flex-row flex-col gap-4 sm:gap-0 pb-8 border-b-(--color-border) border-b justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'> UXUI Designer <span className='ml-2 tracking-[-0.14%] leading-5 flex items-center text-(--color-text-dark)'>at</span>  <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'><img src={Logo3.src} alt="Infusible Coders Logo" /></span> <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>Infusible Coders</span> </p></div>
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-dark)'>2021 - 2023</p></div>
            </div>

              {/* innerblock5 */}
            <div className='flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between'>
              <div><p className='flex flex-row tracking-[-0.14%] leading-5'>Graphic & UI Designer <span className='ml-2 tracking-[-0.14%] leading-5 flex items-center text-(--color-text-dark)'>at</span>  <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'><img src={Logo4.src} alt="94 Productions Logo" /></span> <span className='ml-2 flex items-center tracking-[-0.14%] leading-5'>94 Productions</span> </p></div>
              <div><p className='tracking-[-0.14%] leading-5 text-(--color-text-dark)'>2020 - 2023</p></div>
            </div>
        </div>
      </div>
    </div>

    <Footer/>
 
  </div>
  

     </>
  )
}

export default page
