import Creativelabpage from '@/app/components/creativelabpage'
import { client, urlFor } from '@/lib/sanity'

type CreativeLabItem = {
  _id: string
  title?: string
  image?: unknown
  paragraphs?: string[]
  paragraph?: string
  para2?: string
}

async function getCreativeLabData() {
  const data = await client.fetch<CreativeLabItem[]>(`
    *[_type == "creativeLab"] | order(_createdAt desc){
      _id,
      title,
      image,
      paragraphs,
      paragraph,
      para2
    }
  `)
  return data
}

export default async function creativelabsec(){
    const creativeData = await getCreativeLabData()

    return(
       <div className=' w-full gap-10 flex flex-col'>
        {
            creativeData.map((item)=> {
              const normalizedParagraphs = item.paragraphs?.filter(Boolean) ?? [item.paragraph, item.para2].filter(
                (value): value is string => Boolean(value),
              )

              return (
                <Creativelabpage
                  key={item._id}
                  image={item.image ? urlFor(item.image).url() : ""}
                  slug={item.title}
                  paragraphs={normalizedParagraphs}
                />
              )
            })
        }

       </div>
    )
}
