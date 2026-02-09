import PortfolioClient from "./PortfolioClient";

/**
 * FILE: src/app/portfolio/page.js
 * Server Component - handles metadata
 */

/* =======================
   SEO METADATA EXPORT
======================= */
export const metadata = {
  title: "Our Projects - INNOVISION | AI-Driven Solutions Portfolio",
  description:
    "Explore INNOVISION's portfolio of AI-driven solutions across industries. From LLM platforms to Edge AI and embedded systems, see how we help teams innovate faster.",
  keywords:
    "AI projects, LLM platform, Edge AI, Real Estate AI, Fintech AI, Government Document AI, Marketing AI, Software Development",
  openGraph: {
    title: "Our Projects - INNOVISION",
    description:
      "See how INNOVISION delivers AI-driven solutions across industries",
    type: "website",
    images: [
      {
        url: "/banner-portfolio.png",
        width: 1200,
        height: 630,
        alt: "INNOVISION Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects - INNOVISION",
    description: "AI-driven solutions portfolio",
    images: ["/banner-portfolio.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
