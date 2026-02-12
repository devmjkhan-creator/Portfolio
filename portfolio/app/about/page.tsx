import React from 'react'
import Navbar from '../components/navbar'
import logo1 from '@/public/pictures/logo1.svg'
import logo3 from '@/public/pictures/logo3.svg'
import logo4 from '@/public/pictures/logo4.svg'


const page = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full min-h-screen  font-inter relative bg-[(--color-bg)] flex flex-col items-center'>
        <div className='w-full flex items-center justify-center  border-b border-b-(--color-border) '>
            <div className='w-full relative max-w-[39.875em]  sm:border-r border-r-(--color-border) sm:border-l border-l-(--color-border)  sm:px-10 px-5  sm:py-25  py-20 flex flex-col gap-[68.44px]'>
             <p>About me</p>
              <div className='flex flex-col gap-[74.74px]  items-center justify-center'>
                <div className='w-full h-[244.82px] relative  flex flex-row items-center'>
                    <div className='absolute left-1/2 -translate-x-[132%] min-[646px]:left-0 min-[646px]:translate-x-0 min-[646px]:w-[199.58px] w-[126.66px] h-[155.37px] min-[646px]:h-[244.82px] bg-[#F4F4F4] -rotate-[6.06deg] border-[#FFFFFF] border-[5px] z-50'></div>
                    <div className='absolute left-1/2 -translate-x-1/2 min-[646px]:left-0 min-[646px]:translate-x-[92%] min-[646px]:w-[199.58px] w-[126.66px] h-[155.37px] min-[646px]:h-[244.82px]  bg-[#F4F4F4] rotate-[2.35deg] border-[5px] border-[#FFFFFF] z-40'></div>
                    <div className='absolute left-1/2 translate-x-[32%] min-[646px]:left-0 min-[646px]:translate-x-[165%] min-[646px]:w-[199.58px] w-[126.66px] h-[155.37px] min-[646px]:h-[244.82px] bg-[#F4F4F4] border-[5px] border-[#FFFFFF] rotate-[6.55deg]'></div>
                </div>
                <div className='w-full flex flex-col traking-[-0.14%] leading-[185%] text-[14px] text-(--color-para) gap-8.5'>
                    <p>I’m a product designer with 4+ years of experience building simple, thoughtful digital products. Before moving into product design, I worked as a graphic designer and spent a lot of time behind the camera as a nature photographer, both shaped my eye for visuals, balance, and detail.</p>
                    <p>My background is in Computer Science, which helped me understand how products are built. As I learned more, I found myself enjoying the design side much more than coding, and that led me into product design. Today, I focus on creating clear, usable experiences from complex ideas.</p>
                    <p>
                      Currently, I’m a product designer at{" "}
                      <span className='inline-flex items-center gap-1 align-middle whitespace-nowrap'>
                        <img src={logo1.src} alt="CreativeOS" className='h-4.5 w-4.5' />
                       <span className='text-[#14161B]'> CreativeOS</span>
                      </span>
                      , leading design across the platform and editor. My focus is simplifying the editor so non-technical users can use it confidently, while improving the experience through user feedback.
                    </p>
                    <p>
                      Previously, I worked at{" "}
                      <span className='inline-flex items-center gap-1 align-middle whitespace-nowrap'>
                        <img src={logo3.src} alt="Infusible Coders" className='h-4.5 w-4.5' />
                        <span className='text-[#14161B]'>Infusible Coders</span>
                      </span>
                      , designing ERP systems for educational institutions with multiple modules for different user roles. I also contributed to POS system designs used in real business environments.
                    </p>
                    <p>During my final-year project, I built a SaaS platform that helped students find jobs and courses while enabling local software houses to hire talent.</p>
                    <p>
                      I also worked at{" "}
                      <span className='inline-flex items-center gap-1 align-middle whitespace-nowrap'>
                        <img src={logo4.src} alt="94 Productions" className='h-4.5 w-4.5' />
                        <span className='text-[#14161B]'>94 Productions</span>
                      </span>
                      , where I started as a graphic designer and later transitioned into UI projects, contributing to early-stage product designs.
                    </p>
                    <p>Outside of work, I share my designs online, explore visual inspiration, and enjoy photography. I love traveling, exploring new places, trying new food, and reading books.</p>
                </div>
             </div>
            </div>

        </div>
    </div>      
    </>
  )
}

export default page
