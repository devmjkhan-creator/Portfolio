type CaseStudyCardProps = {
  title: string
  client: string
  image?: string // optional, future me image ho sakti
}

const CaseStudyCard = ({ title, client, image }: CaseStudyCardProps) => {
  return (
    <div className="flex flex-col gap-1 font-inter ">
      <div className="w-full sm:h-96 h-60.5 bg-[#f4f4f4] border border-[#eeeeee] overflow-hidden">
        {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-(--color-primary-text) text-[14px] tracking-[-0.14%] leading-5">{title}</p>
        <p className="text-[#7F8087] text-[14px] tracking-[-0.14%] leading-5 ">{client}</p>
      </div>
    </div>
  )
}

export default CaseStudyCard
