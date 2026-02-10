import React from 'react'
import Uxbites from '../components/uxbites'


const dummyData = [
  { id:1,   text: "I designed this for AI art generator website where focus is on best conversion plus now its working really good more than expectations and our users are enjoying it very and we are happy.",image:''  },
  { id:2,   text: "I designed this for AI art generator website where focus is on best conversion plus now its working really good more than expectations.",image:'' },
  { id:3,   text: "I designed this for AI art generator website where focus is on best conversion plus now its working really good more than expectations." ,image:''},
  { id:4,   text:"I designed this for AI art generator website where focus is on best conversion plus now its working really good more than expectations.",image:''},
  { id:5,   text:"I designed this for AI art generator website where focus is on best conversion plus now its working really good more than expectations.",image:''},
  { id:6,   text:"I designed this for AI art generator website where focus is on best conversion plus now its working really good more than expectations.",image:''},
  
]

export default function uxbitesdata() {
  return (
    
        <div className='flex flex-col items-center justify-center gap-8'>
          {dummyData.map((item) => ( 
            <Uxbites
              key={item.id}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
  )
}

