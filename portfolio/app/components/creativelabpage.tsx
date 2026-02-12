import React from 'react'
type Creativelabprops={
    image?: string
    paragraph: string
    para2: string
    slug: string
}


const creativelabpage = ({image, paragraph, para2, slug}:Creativelabprops) => {
  return (
    
                    <div className='w-full gap-6 flex flex-col'>
                        <div className='sm:h-80 h-50 w-full bg-[#EEEEEE]'>
                             {image && <img src={image} alt={slug} className="w-full h-full object-cover" />}
                        </div>
                        <div className=' w-full flex flex-col gap-4 tracking-[-0.14%] leading-[185%] text-[14px] text-(--color-para)'>
                            <p>{paragraph}</p>
                            <p>{para2}</p>
                        </div>
                    </div>
  )
}

export default creativelabpage
