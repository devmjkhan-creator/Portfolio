import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Arrowleft from "@/public/pictures/arrow-left.svg";
import { client, urlFor } from "@/lib/sanity";

type ParagraphTone = "dark" | "black";

type TextBlock = {
  _type: "caseStudyTextBlock";
  heading?: string;
  paragraphs?: string[];
  tone?: ParagraphTone;
  paragraphTones?: ParagraphTone[];
};

type ImageBlock = {
  _type: "caseStudyImageBlock";
  image?: unknown;
  alt?: string;
  caption?: string;
};

type LegacyImageWithTextBlock = {
  _type: "imageWithText";
  image?: unknown;
  text?: string;
};

type ContentBlock = TextBlock | ImageBlock | LegacyImageWithTextBlock;

type CaseStudyDetailData = {
  title?: string;
  intro?: string;
  client?: string;
  image?: unknown;
  industryInfo?: {
    industry?: string;
    role?: string;
    company?: string;
    date?: string;
  };
  content?: ContentBlock[];
};

type CaseStudySlugProps = {
  params: Promise<{ slug: string }>;
};

const labelClass = "text-(--color-text-dark)";
const valueClass = "text-(--color-text-black) whitespace-nowrap";
const paragraphDarkClass =
  "text-[14px] tracking-[-0.14%] leading-[185%] text-(--color-text-dark)";
const paragraphBlackClass =
  "tracking-[-0.6%] leading-5 text-[14px] text-(--color-text-black)";

function renderDynamicBlock(block: ContentBlock, index: number) {
  if (block._type === "caseStudyImageBlock") {
    return (
      <div key={`image-${index}`} className="flex flex-col gap-3 items-center">
        <div className="bg-[#EEEEEE] w-full aspect-7/4 overflow-hidden">
          {Boolean(block.image) && (
            <img
              src={urlFor(block.image).url()}
              alt={block.alt || block.caption || "Case study"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {block.caption && (
          <p className="tracking-[-0.6%] leading-5 text-[14px] text-(--color-text-dark)">
            {block.caption}
          </p>
        )}
      </div>
    );
  }

  if (block._type === "imageWithText") {
    return (
      <div key={`legacy-image-${index}`} className="flex flex-col gap-3 items-center">
        <div className="bg-[#EEEEEE] w-full aspect-7/4 overflow-hidden">
          {Boolean(block.image) && (
            <img
              src={urlFor(block.image).url()}
              alt={block.text || "Case study"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {block.text && (
          <p className="tracking-[-0.6%] leading-5 text-[14px] text-(--color-text-dark)">
            {block.text}
          </p>
        )}
      </div>
    );
  }

  return (
    <div key={`text-${index}`} className="flex flex-col gap-3">
      {block.heading && (
        <p className="tracking-[-0.6%] leading-5 text-[14px] text-(--color-text-black)">
          {block.heading}
        </p>
      )}
      {(block.paragraphs || []).map((paragraph, paragraphIndex) => (
        <p
          key={`paragraph-${paragraphIndex}`}
          className={
            (block.paragraphTones?.[paragraphIndex] ?? block.tone) === "black"
              ? paragraphBlackClass
              : paragraphDarkClass
          }
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default async function CaseStudySlugPage({ params }: CaseStudySlugProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const study = await client.fetch<CaseStudyDetailData | null>(
    `*[_type == "caseStudyDetailPage" && slug.current == $slug][0]{
      title,
      intro,
      client,
      image,
      industryInfo,
      content[]{
        ...,
        _type == "caseStudyImageBlock" => {
          ...,
          image
        },
        _type == "imageWithText" => {
          ...,
          image
        }
      }
    }`,
    { slug },
  );

  if (!study) notFound();

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen relative flex items-center flex-col font-inter ">
        <div className="w-full flex items-center justify-center border-b border-b-(--color-border)">
          <div className="w-full relative max-w-[39.875em] items-center sm:border-r border-r-(--color-border) sm:border-l border-l-(--color-border) sm:px-10 px-5 sm:pt-7.5 pt-20 sm:pb-25 pb-25 flex flex-col gap-0">
            <div className="w-full fixed sm:top-[8.60vh] top-[8vh] left-0 z-40 flex items-center justify-center">
             {/* backbtn */}
              <div
                className="absolute inset-0 bg-white/35 backdrop-saturate-150"
                style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
              />
              <div className="absolute inset-x-0 -bottom-6 h-10 bg-linear-to-b from-white/40 via-white/20 to-transparent blur-xl pointer-events-none" />
              <div className="relative w-full max-w-[39.875em] sm:border-r border-r-(--color-border) h-17 sm:border-l border-l-(--color-border) sm:px-10 px-5 py-6">
                <div className="relative z-10 flex flex-row items-center w-full gap-1">
                  {/* Arrowicon */}
                  <Link href="/case-studies" className="flex flex-row items-center gap-1">
                    <i>
                      <img className="cursor-pointer" src={Arrowleft.src} alt="Back" />
                    </i>
                    <p className="text-[14px] cursor-pointer">Back</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:h-17.5" aria-hidden="true" />

            <div className="w-full flex flex-col items-center gap-8">
             <div className=" w-full h-full flex flex-col gap-8">
              <div className="w-full flex flex-col  gap-8">
              {/* titleblock */}
               <div className="flex flex-col w-full  gap-4">
                 <p className="text-(--color-text-black) text-[14px] tracking-[-0.14%] leading-5">
                  {study.title || "Untitled Case Study"}
                </p>
                <p className="text-(--color-text-dark) text-[14px] tracking-[-0.14%] leading-5">
                  {study.intro || ""}
                </p>
               </div>
                <div className="flex w-full flex-col gap-3 ">
                  <div className="text-[14px]  tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center">
                    <div className="w-24">
                      <p className={labelClass}>Industry</p>
                    </div>
                    <p className={`${valueClass} items-start`}>{study.industryInfo?.industry || "-"}</p>
                  </div>

                  <div className="text-[14px] tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center ">
                    <div className="w-24">
                      <p className={labelClass}>Role</p>
                    </div>
                    <p className={valueClass}>{study.industryInfo?.role || "-"}</p>
                  </div>

                  <div className="text-[14px] tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center">
                    <div className="w-24">
                      <p className={labelClass}>Company</p>
                    </div>
                    <p className={valueClass}>{study.industryInfo?.company || "-"}</p>
                  </div>

                  <div className="text-[14px] tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center">
                    <div className="w-24">
                      <p className={labelClass}>Date</p>
                    </div>
                    <p className={valueClass}>{study.industryInfo?.date || "-"}</p>
                  </div>
                </div>
              </div>
               {Boolean(study.image) && (
                  <div className="bg-[#EEEEEE] w-full aspect-7/4 overflow-hidden">
                    <img
                      src={urlFor(study.image).url()}
                      alt={study.title || "Case study"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
             </div>
             {/* randomblock */}
              <div className="w-full gap-8 flex flex-col ">
                {(study.content || []).map(renderDynamicBlock)}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
