import AboutUsClient from "./AboutUsClient";

/**
 * FILE: src/app/about/page.js
 * Server Component - handles SEO metadata
 */

/* =======================
   SEO METADATA EXPORT
======================= */
export const metadata = {
  title: "About Us - INNOVISION | AI & Edge Computing Solutions",
  description:
    "INNOVISION Corporation specializes in AI, LLMs, and Edge AI solutions. We deliver scalable, real-world technology that drives digital transformation across Southeast Asia.",
  keywords:
    "AI company, Edge Computing, LLM solutions, Digital Transformation, Southeast Asia AI, Technology Startup, AI Development, Embedded Systems",
  authors: [{ name: "INNOVISION Corporation" }],
  openGraph: {
    title: "About INNOVISION - AI & Edge Computing Solutions",
    description:
      "Leading AI and Edge Computing technology company empowering enterprises in Southeast Asia",
    type: "website",
    url: "https://innovision.com/about",
    images: [
      {
        url: "/banner-aboutus.png",
        width: 1200,
        height: 630,
        alt: "INNOVISION About Us",
      },
    ],
    siteName: "INNOVISION Corporation",
  },
  twitter: {
    card: "summary_large_image",
    title: "About INNOVISION - AI & Edge Computing Solutions",
    description:
      "Leading AI technology company in Southeast Asia specializing in LLMs and Edge AI",
    images: ["/banner-aboutus.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://innovision.com/about",
  },
};

export default function AboutPage() {
  return <AboutUsClient />;
}
