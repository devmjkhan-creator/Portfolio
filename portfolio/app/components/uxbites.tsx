import React from 'react';
type UxbitesProps = {
  key:number
  text:string
  image?: string // optional, future me image ho sakti
}

const Uxbites= ({ text,image }: UxbitesProps) => {
  return (
     <div className='w-full b gap-6 flex flex-col items-center justify-center font-inter'>
                <div className='w-full aspect-7/4 bg-[#f4f4f4] overflow-hidden'>
                    {image && <img src={image} alt="" className="w-full h-full object-cover" />}
                </div>
                <p className='text-start tracking-[-0.14%] leading-[185%] text-[14px] text-(--color-para)'>
                    {text}
                </p>
              </div>
  )
}

export default Uxbites
