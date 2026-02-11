import React from 'react'
type Casestudypageprops={
  title : string
  client : string
  image?: string
}

const Casestudypage = ({title,client,image}:Casestudypageprops) => {
  return (
        <div className='flex flex-col gap-4 font-inter'>

           <div className='w-full sm:h-96 h-60.5 bg-[#f4f4f4] border border-[#EEEEEE]'>
             {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
           </div>
          <div className='flex flex-col gap-1'>
                <p className='text-[14px] tracking-[-0.14%] leading-5 text-[#14161B] '>{title}</p>
                <p className='text-(--color-text-dark) text-[14px] tracking-[-0.14%] leading-5'>{client}</p>
          </div>

        </div>

  )
}

export default Casestudypage
