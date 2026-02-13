import { client, urlFor } from "@/lib/sanity"; 
import Casetudyard from "../components/ casestudycard";

async function getCaseStudies() {
  return await client.fetch(`
    *[_type == "caseStudy"]{
      _id,
      title,
      client,
      image
    }
  `);
}

export default async function CaseStudies() {
  const data = await getCaseStudies();

  return (
    <div className="mt-16 flex flex-col gap-8 sm:w-full">
      {data.map((item: any) => (
        <Casetudyard
          key={item._id}
          title={item.title}
          client={item.client}
          image={item.image ? urlFor(item.image).url() : ""}
        />
      ))}
    </div>
  );
}
