import React from 'react'
import Link from "next/link";

type Casestudypageprops={
  title : string
  client : string
  image?: string
  slug :string
}

const Casestudypage = ({title,client,image,slug}:Casestudypageprops) => {
  return (
    <Link href={`/case-studies/${slug}`}>
      <div className='flex flex-col gap-4 font-inter cursor-pointer'>
        <div className='w-full aspect-[29/20] bg-[#f4f4f4] border border-[#EEEEEE] overflow-hidden'>
          {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[14px]'>{title}</p>
          <p className='text-(--color-text-dark) text-[14px]'>{client}</p>
        </div>
      </div>
    </Link>
  );
};

export default Casestudypage
