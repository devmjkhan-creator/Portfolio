import Casestudypage from "../components/casestudypage";

const dummmyData=[
  {id:1 , title:"Funnel Congruence" , client:"CreativeOS" , image:"" ,slug:"landing-optimization" },
  {id:2 , title:"Funnel Congruence" , client:"CreativeOS" , image:"" ,slug :"funnel-congruence" },
]

export default function Casepagesec(){
  return(
       <div className="flex flex-col gap-6">
        {
          dummmyData.map((item)=>(
            <Casestudypage
            key={item.id}
            title={item.title}
            client={item.client}
            image={item.image}
            slug={item.slug}
            />
          ))
        }
       </div>
  
  )
}