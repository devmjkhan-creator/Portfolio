import CaseStudyCard from '../components/ casestudycard'
import Blockimg from './public/pictures/blockimg.png'

// For now, static dummy data
const dummyData = [
  { id: 1, title: "Funnel Congruence", client: "CreativeOS",  },
  { id: 2, title: "Sales Dashboard", client: "FintechPro" },
  { id: 3, title: "Marketing Portal", client: "SaaS Labs" ,image:'/pictures/blockimg.png'},
]

export default function CaseStudiesSection() {
  return (
    
        <div className='mt-16 flex flex-col gap-8 sm:w-full '>
          {dummyData.map((item) => ( 
            <CaseStudyCard
              key={item.id}
              title={item.title}
              client={item.client}
              image={item.image}
            />
          ))}
        </div>
  )
}
