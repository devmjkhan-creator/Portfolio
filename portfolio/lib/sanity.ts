import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"; 

export const client = createClient({
  projectId: "m0fq3wze",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// urlFor function banaye
export const urlFor = (source: any) => imageUrlBuilder(client).image(source);

