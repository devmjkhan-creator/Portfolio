import React from "react";
import Uxbites from "../components/uxbites";
import { client, urlFor } from "@/lib/sanity";

async function getUxBites() {
  const data = await client.fetch(`
    *[_type == "uxBites"]{
      _id,
      text,
      image
    }
  `);
  return data;
}

export default async function UxBitesData() {
  const uxData = await getUxBites();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {uxData.map((item: any) => (
        <Uxbites
          key={item._id}
          text={item.text}
          image={item.image ? urlFor(item.image).url() : ""} // image URL generate
        />
      ))}
    </div>
  );
}


