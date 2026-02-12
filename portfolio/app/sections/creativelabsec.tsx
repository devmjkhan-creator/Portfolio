import Creativelabpage from '@/app/components/creativelabpage'
const dummmyData=[
  {id:1 ,  paragraph:"This little corner of the world is where my ideas come to life. I like to call it my kitchen because, just like cooking, I mix things up, try new things, and yes, sometimes things don’t go as planned." , para2:"But in the end, I always create something meaningful! What might look like a jumbled mess on my screen is really the heart of my creative process.", image:"" ,slug:"landing-optimization" },
  {id:2 ,  paragraph:" I ️love exploring all that 🎧Apple has to offer, as their innovations have been a huge help to me. I often start by practicing through replication, just copying designs to sharpen my skills. It’s a fun way to learn and experiment before diving into my own new concepts. And when I start to feel a bit worn out, I switch things up by exploring 3D illustrations or go outside for a short ️walk to clear my mind and return with a fresh perspective!" , para2:"", image:"" ,slug :"funnel-congruence" },
]

export default function creativelabsec(){
    return(
       <div className=' w-full gap-10 flex flex-col'>
        {
            dummmyData.map((item)=>(
                <Creativelabpage
                key={item.id}
                paragraph={item.paragraph}
                para2={item.para2}
                slug={item.slug}
                />

            ))
        }

       </div>








    )
}