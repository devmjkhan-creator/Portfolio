import Casestudypage from "../components/casestudypage";
import { client, urlFor } from "@/lib/sanity";

type CaseStudyListItem = {
  _id: string;
  title: string;
  client: string;
  image?: unknown;
  slug: string;
};

async function getCaseStudies() {
  const data = await client.fetch<CaseStudyListItem[]>(`
    *[_type == "caseStudyPage" && defined(slug.current)] | order(_createdAt desc){
      _id,
      title,
      client,
      image,
      "slug": slug.current
    }
  `);
  return data;
}

export default async function Casepagesec() {
  const caseData = await getCaseStudies();

  return (
    <div className="flex flex-col gap-6">
      {caseData.map((item) => (
        <Casestudypage
          key={item._id}
          title={item.title}
          client={item.client}
          image={item.image ? urlFor(item.image).url() : ""}
          slug={item.slug}
        />
      ))}
    </div>
  );
}
