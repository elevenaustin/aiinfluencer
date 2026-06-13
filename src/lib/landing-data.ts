import inf1 from "@/assets/influencer-1.jpg";
import inf2 from "@/assets/influencer-2.jpg";
import inf3 from "@/assets/influencer-3.jpg";
import inf4 from "@/assets/influencer-4.jpg";
import inf5 from "@/assets/influencer-5.jpg";
import inf6 from "@/assets/influencer-6.jpg";
import inf7 from "@/assets/influencer-7.jpg";
import inf8 from "@/assets/influencer-8.jpg";
import inf9 from "@/assets/influencer-9.jpg";
import inf10 from "@/assets/influencer-10.jpg";
import inf11 from "@/assets/influencer-11.jpg";
import inf12 from "@/assets/influencer-12.jpg";
import inf13 from "@/assets/influencer-13.jpg";
import inf14 from "@/assets/influencer-14.jpg";
import inf15 from "@/assets/influencer-15.jpg";
import inf16 from "@/assets/influencer-16.jpg";
import inf17 from "@/assets/influencer-17.jpg";
import inf18 from "@/assets/influencer-18.jpg";
import inf19 from "@/assets/influencer-19.jpg";
import inf20 from "@/assets/influencer-20.jpg";
import inf21 from "@/assets/influencer-21.jpg";
import inf22 from "@/assets/influencer-22.jpg";
import inf23 from "@/assets/influencer-23.jpg";
import inf24 from "@/assets/influencer-24.jpg";
import inf25 from "@/assets/influencer-25.jpg";
import inf26 from "@/assets/influencer-26.jpg";
import inf27 from "@/assets/influencer-27.jpg";
import inf28 from "@/assets/influencer-28.jpg";
import inf29 from "@/assets/influencer-29.jpg";

export const CHECKOUT_URL = "https://earlycaves.com/dp/69f081ec9988b97be66825ab";

const imgs = [
  inf1, inf2, inf3, inf4, inf5, inf6, inf7, inf8, inf9, inf10,
  inf11, inf12, inf13, inf14, inf15, inf16, inf17, inf18, inf19, inf20,
  inf21, inf22, inf23, inf24, inf25, inf26, inf27, inf28, inf29
];
const img = (n: number) => imgs[(n - 1) % imgs.length];

export type Influencer = {
  handle: string;
  price: number;
  subs: number;
  image: string;
  imageIndex: number;
};

const raw: [string, number, number, number][] = [
  ["nishika.irl", 180, 5, 1],
  ["aliyaleone143", 390, 70, 2],
  ["aira_rawat_", 390, 100, 3],
  ["kvyaa.official", 390, 34, 4],
  ["niyatixjoshi", 390, 4, 5],
  ["aira_rawat_", 390, 101, 6],
  ["maxine_zoee", 290, 29, 7],
  ["bold_madhubala", 180, 102, 8],
  ["jessy_jaisi_koi_nahi", 290, 43, 9],
  ["subliminalchloe", 180, 75, 10],
  ["zaraso_phia", 290, 218, 1],
  ["ayashruti", 290, 54, 2],
  ["anushkadaniofficial", 180, 120, 3],
  ["trendy.anika", 180, 48, 4],
  ["alisha_sharma.16", 390, 107, 5],
  ["payal.yadav.990", 95, 105, 6],
  ["mainairahoo", 180, 33, 7],
  ["parvathy_offical._", 290, 159, 8],
  ["anok.hiano02244", 290, 13, 9],
  ["kavy_k15", 290, 8, 10],
  ["cool.kishmish", 290, 42, 1],
  ["adhirashreee", 290, 37, 2],
  ["your_dailydosez", 180, 16, 3],
  ["sassykritikasharma", 390, 2, 4],
  ["avnii_19_", 290, 106, 5],
  ["aditii_20y", 180, 34, 6],
  ["aavnibali", 180, 5, 7],
  ["maxine_zoee", 290, 29, 8],
  ["bold_madhubala", 180, 102, 9],
];

export const influencers: Influencer[] = raw.map(([handle, price, subs, n], index) => ({
  handle,
  price,
  subs,
  image: imgs[index],
  imageIndex: index + 1,
}));

export const tickerItems = [
  "2.5M Followers",
  "1.2M Followers",
  "3.6M Followers",
  "₹2L / month",
  "100+ Subscribers",
  "Viral Reels",
  "Brand Deals",
  "Real Earnings",
];

export const masterFeatures = [
  "NO Higgsfield subscription required",
  "NO PC Required - Use in Mobile also",
  "No paid software required",
  "Video Format",
  "Beginner friendly — no skills needed",
  "Step-by-step video tutorials",
  "Create real, viral influencer pages",
  "Lifetime access + instant download",
  "7-day refund guarantee",
];

export const curriculum = [
  "Create a hyper-realistic AI character",
  "Generate professional photoshoot images using AI",
  "Become a digital AI influencer from scratch",
  "Make viral Instagram Reels & short-form content",
  "Write captions and hooks that pull followers",
  "Use AI tools to generate content in minutes",
  "Convert any image into a viral-style video",
  "Monetise via subscriptions, brand deals & promos",
];

export const steps = [
  {
    n: "01",
    title: "Watch the lessons",
    text: "Open on your Android or iOS phone. Easy video tutorials to follow.",
  },
  {
    n: "02",
    title: "Build your AI Influencer",
    text: "Create a hyper-realistic character + viral reels using free AI tools.",
  },
  {
    n: "03",
    title: "Grow & Monetise",
    text: "Get followers, open subscriptions, land brand deals — earn lakhs/month.",
  },
];

export const bonuses = [
  { name: "Canva Pro", sub: "Lifetime Access" },
  { name: "Wondershare Filmora", sub: "Lifetime" },
  { name: "Kinemaster Pro", sub: "Lifetime" },
  { name: "CapCut Pro", sub: "Lifetime" },
  { name: "Viral Reel Templates", sub: "100+ Pack" },
  { name: "AI Prompt Vault", sub: "500+ Prompts" },
];

export const offerIncludes = [
  "Full AI Influencer Course",
  "Hyper-realistic Character Workflow",
  "Viral Reel Creation System",
  "Caption + Hook Templates",
  "Free Tool Stack (₹0 forever)",
  "All 6 Premium Bonuses",
  "Lifetime Access",
  "7-day Money-Back Guarantee",
];

export const faqs = [
  {
    q: "Do I need a PC or laptop?",
    a: "No. Everything is built on a phone — works on both Android and iOS.",
  },
  {
    q: "Do I need any prior AI experience?",
    a: "Zero. Complete beginners welcome. Tutorials are step-by-step in Video.",
  },
  {
    q: "Are the AI tools actually free?",
    a: "Yes. We use only free tiers — no credit card needed, no subscription required.",
  },
  {
    q: "How will I get the course?",
    a: "Instant access right after payment. Lifetime access, watch anytime.",
  },
  {
    q: "Is there a refund?",
    a: "Yes — 7-day refund guarantee. If it's not for you, we refund. No questions asked.",
  },
];

export const socialProofNames = [
  ["Priya K.", "Delhi"],
  ["Ananya S.", "Mumbai"],
  ["Riya M.", "Bangalore"],
  ["Sneha R.", "Pune"],
  ["Kavya P.", "Hyderabad"],
  ["Isha T.", "Jaipur"],
  ["Diya N.", "Chennai"],
  ["Aarohi G.", "Kolkata"],
];

export const fmt = (n: number) => n.toLocaleString("en-IN");
