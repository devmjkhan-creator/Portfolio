import React from 'react'
type Creativelabprops={
    image?: string
    paragraphs: string[]
    slug?: string
}


const creativelabpage = ({image, paragraphs, slug}:Creativelabprops) => {
  return (
    
                    <div className='w-full gap-6 flex flex-col'>
                        <div className='w-full aspect-7/4 bg-[#EEEEEE] overflow-hidden'>
                             {image && <img src={image} alt={slug || "Creative Lab"} className="w-full h-full object-cover" />}
                        </div>
                        <div className=' w-full flex flex-col gap-4 tracking-[-0.14%] leading-[185%] text-[14px] text-(--color-para)'>
                            {paragraphs.map((paragraph, index) => (
                              <p key={`${slug || "creative"}-paragraph-${index}`}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
  )
}

export default creativelabpage
