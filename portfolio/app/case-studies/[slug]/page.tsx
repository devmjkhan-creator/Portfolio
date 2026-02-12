"use client";

import React from "react";
import Navbar from "@/app/components/navbar";
import Arrowleft from "@/public/pictures/arrow-left.svg";
import Footer from "@/app/components/footer";
import { useParams, useRouter } from "next/navigation";

type DetailBlock =
  | {
      _type: "text";
      heading?: string;
      paragraphs: string[];
      tone?: "dark" | "black";
      paragraphTones?: Array<"dark" | "black">;
    }
  | {
      _type: "image";
      image?: string;
      alt?: string;
      caption?: string;
    };

type CaseStudyData = {
  slug: string;
  title: string;
  intro: string;
  industry: string;
  role: string;
  company: string;
  date: string;
  blocks: DetailBlock[];
};

const fallbackParagraph =
  "In today’s fast-paced world, users are seeking quick and convenient ways to manage their bill payments. However, many existing payment apps, such as Easypaisa and JazzCash, are designed to work exclusively with their own payment systems, limiting users' choices. This lack of flexibility often leads to frustration as users struggle to find a streamlined solution for paying their bills. Additionally, many apps bundle bill payments with other services, complicating navigation and making the process more time-consuming.";
const fallbackparagraph2 = 
"There is currently no bill payment product that offers multiple payment methods, and similar apps like Easypaisa and JazzCash only support their payment systems. This results in people often struggling to find a convenient way to pay their bills or feeling frustrated due to limited options. We aim to create a product that helps people save time, pay their bills quickly, and focus solely on bill payment services with multiple payment methods."
const fallbackParagraph3 =
"It was a Sunday when I went out with my friend Azhar for relaxation. When we rested at a place, he needed to submit a bill, it was the last date. He wanted to pay through EasyPaisa but didn’t have money in that account. He had funds in another finance account and got frustrated because he needed to transfer money from that account before paying the bill. I noticed his facial expression and thought why not create a product that offers only bill payment services with multiple payment methods through which users can easily pay."
const fallbackParagraph4 =
"I started my research based on the problem and studied competitor apps patterns. Keeping the user in focus, I considered how we could provide an easy-to-use pattern that would allow users to pay bills quickly and easily. For more clarity, I conducted quantitative research with surveys and asked questions to my friends who mostly pay online. This process brought me more clarity, and then I mapped out the user journey. Subsequently, I created wireframes and then the UI design."

const defaultBlocks: DetailBlock[] = [
  { _type: "image", image: "/pictures/blue.jpeg", alt: "Paybill case study cover" },
  {
    _type: "text",
    heading: "A Bit About Me",
    tone: "dark",
    paragraphs: [
      "I am a product designer and freelancer who loves creating easy-to-use apps. In this case study, I share my first project with the Paybills app, where I built a bill payment app from scratch. This project shows my skills in understanding user needs, doing thorough research, and designing an intuitive solution.",
    ],
  },
  { _type: "text", heading: "Context", tone: "dark", paragraphs: [fallbackParagraph] },
  { _type: "text", heading: "Problem Statement", tone: "dark", paragraphs: [fallbackparagraph2] },
  { _type: "text", heading: "Crafted Solution", tone: "dark" , paragraphs:[]},
  { _type: "image",},
  { _type: "text", heading: "Why did I choose this project?", tone: "dark", paragraphs: [fallbackParagraph3] },
   { _type: "text", heading: "Design Process", tone: "dark", paragraphs: [fallbackParagraph4] },
   { _type: "image", caption:"Information Architecture"},
   { _type: "image", caption:"Journey Mapping"},
   {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "Based on my research, I designed an IA Map and a Journey Map. The Journey Map greatly helps me understand user thoughts and emotions, allowing me to identify opportunities for users.",
      "Now, I’ll provide a screen-by-screen breakdown, highlighting the problems and the features I’ve added to address them.",
    ],
  },
    { _type: "image", caption:"Main Category Screen"},

  {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "This is the main screen where users can easily select the bill they want to pay.",
      "I designed the bill categories in a 2x2 column format, making it easier for users to find their desired category quickly. Additionally, I applied Miller’s Law, which states that the average person can hold only 7 items (±2) in their working memory. This principle is often used in UX design to minimize cognitive load and reduce the mental effort required to interact with a product.",
      "For the listed items, I used consistent brand colors to maintain a cohesive look and prevent users from feeling overwhelmed, ensuring a smoother and more intuitive experience.",
    ],
  },
   { _type: "image", caption:"Bill Company Selection"},
      {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "Next, we have the Bill Companies screen, where users can easily select their bill and navigate to the next screen.",
      "If there are 20+ companies listed in the grid, it could be challenging for users to locate their desired company quickly. To address this, we added a search feature, allowing users to find the company they’re looking for effortlessly.",
    ],
  },
    { _type: "image", caption:"Searching Bill Category or Company"},
         {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "I created two concepts with different search methods to help users find their desired category. Users can search either by the main category or directly by the sub-category. Since 70% to 80% of users typically search for bills directly by companies name, I prioritized this in the design.",
      "Below the sub-category search results, I included the main category for additional clarity. This helps users understand the type of bill they are paying. For example, many users may not realize that a Barkiyat bill is an internet bill, so displaying the category alongside the search results ensures greater accuracy and reduces confusion.",
    ],
  },
     { _type: "image", caption:"Bill Detail Screen"},
      {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "This screen features the company logo at the top to help users identify the bill they are paying.",
      "This screen allows users to enter a reference number or scan their bill’s barcode to proceed with payment. If users are unsure where to find the reference number, the secondary CTA, ‘Picture Help,’ provides clear guidance on its location.",
    ],
  },
   { _type: "image", caption:"Bill Breakdown"},
      {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "In the Bill Breakdown screen, I used a layout pattern similar to Easypaisa, as it is simple and easy to read.",
      "At the end of the screen, I included a note to inform users about any late fees associated with their bill.",
    ],
  },
  { _type: "image", caption:"Added Payment Methods"},
      {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "This is the main problem-solving screen of our app, where users struggle with a single payment method in other apps. We provide users with multiple payment methods to pay their bills.",
      "The purpose of adding a secondary payment method button is so that if the user changes their mind and wants to pay with another payment method, they can easily add it without going back.",
    ],
  },
    { _type: "image", caption:"Adding Payment Method"},
      {
    _type: "text",
    tone: "dark",
    paragraphs: [
      "A default screen will be shown to new users if they haven’t added any payment method. When they choose to add one, two types of methods will be displayed allowing them to add either a card or wallet account.",
      "If someone is trying to pay a bill and they’ve submitted the bill details without having added a payment method, they will be directly navigated to this screen.",
      "I designed the payment methods to be as simple and user-friendly as possible, allowing users to add their preferred payment method effortlessly. For wallet integration, I included CNIC (Computerized National Identity Card) verification, as most financial apps in Pakistan require a CNIC for account registration. When users enter their CNIC, it will either be verified directly through the backend or redirect them to the financial app for confirmation. This process will require permission and collaboration with financial companies.",
    ],
  },
    {
    _type: "text",
    tone: "dark",
    paragraphTones: ["black", "dark"],
    paragraphs: [
      "Signing off with that!",
      "Thank you so much for taking the time to read the case study! I hope you found it helpful & informative. Your attention means a lot. Have a nice day!"
    ],
  },
 


];

const caseStudiesBySlug: Record<string, CaseStudyData> = {
  "landing-optimization": {
    slug: "landing-optimization",
    title: "Paybill - Manage & Pay your Bills Easily",
    intro:
      "PayBill is a bill payment platform where customers can link multiple payment methods to pay their bills.",
    industry: "Fintech",
    role: "Product Designer",
    company: "CreativeOS",
    date: "2025",
    blocks: defaultBlocks,
  },
  "funnel-congruence": {
    slug: "funnel-congruence",
    title: "Funnel Congruence - Conversion Improvement",
    intro: "A conversion-focused redesign to reduce friction and improve checkout completion rates.",
    industry: "SaaS",
    role: "Product Designer",
    company: "CreativeOS",
    date: "2025",
    blocks: defaultBlocks,
  },
};

const labelClass = "text-(--color-text-dark)";
const valueClass = "text-(--color-text-black) whitespace-nowrap";
const paragraphDarkClass = "text-[14px] tracking-[-0.14%] leading-[185%] text-(--color-text-dark)";
const paragraphBlackClass = "tracking-[-0.6%] leading-5 text-[14px] text-(--color-text-black)";

function renderBlock(block: DetailBlock, index: number) {
  if (block._type === "image") {
    return (
      <div key={`image-${index}`} className="flex flex-col gap-3 items-center">
        <div className="bg-[#EEEEEE] w-full sm:h-79.75 h-[201.08px] overflow-hidden">
          {block.image && <img src={block.image} alt={block.alt || block.caption || "Case study"} className="w-full h-full object-cover" />}
        </div>
        {block.caption && (
          <p className="tracking-[-0.6%] leading-5 text-[14px] text-(--color-text-dark)">{block.caption}</p>
        )}
      </div>
    );
  }

  return (
    <div key={`text-${index}`} className="flex flex-col gap-3">
      {block.heading && (
        <p className="tracking-[-0.6%] leading-5 text-[14px] text-(--color-text-black)">{block.heading}</p>
      )}
      {block.paragraphs.map((paragraph, paragraphIndex) => (
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

const CaseStudyDetailPage = () => {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const study = caseStudiesBySlug[params.slug] || caseStudiesBySlug["landing-optimization"];

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen relative flex items-center flex-col font-inter">
        <div className="w-full flex items-center justify-center border-b border-b-(--color-border)">
          <div className="w-full relative max-w-[39.875em] items-center sm:border-r border-r-(--color-border) sm:border-l border-l-(--color-border) sm:px-10 px-5 sm:pt-7.5 pt-20 sm:pb-25 pb-25 flex flex-col gap-0">
            <div className="w-full fixed sm:top-[8.60vh] top-[8vh] left-0 z-40 flex items-center justify-center">
              <div
                className="w-full max-w-[39.875em] sm:border-r border-r-(--color-border) h-17 sm:border-l border-l-(--color-border) sm:px-10 px-5 py-6 bg-white/45 backdrop-blur-2xl backdrop-saturate-150"
                style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              >
                <div className="flex flex-row items-center w-full  gap-1">
                  <i>
                    <img src={Arrowleft.src} alt="Back" />
                  </i>
                  <p onClick={() => router.back()} className="text-[14px] cursor-pointer">
                    Back
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-17.5" aria-hidden="true" />

            <div className="w-full flex flex-col items-center gap-10">
               <div className="w-full flex flex-col gap-4">
                  <p className="text-(--color-text-black) text-[14px] tracking-[-0.14%]  leading-5">{study.title}</p>
                <p className="text-(--color-text-dark) text-[14px] tracking-[-0.14%] leading-5">{study.intro}</p>
                <div className="flex w-full flex-col gap-3 sm:pt-4">
                  <div className="text-[14px] tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center">
                    <div className="w-24">
                      <p className={labelClass}>Industry</p>
                    </div>
                    <p className={`${valueClass} items-start`}>{study.industry}</p>
                  </div>
                  <div className="text-[14px] tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center">
                    <div className="w-24">
                      <p className={labelClass}>Role</p>
                    </div>
                    <p className={valueClass}>{study.role}</p>
                  </div>
                  <div className="text-[14px] tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center">
                    <div className="w-24">
                      <p className={labelClass}>Company</p>
                    </div>
                    <p className={valueClass}>{study.company}</p>
                  </div>
                  <div className="text-[14px] tracking-[-0.14%] leading-5 flex flex-row w-52.5 items-center">
                    <div className="w-24">
                      <p className={labelClass}>Date</p>
                    </div>
                    <p className={valueClass}>{study.date}</p>
                  </div>
                </div>
              </div>

              <div className="w-full gap-8 flex flex-col">{study.blocks.map(renderBlock)}</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudyDetailPage;
