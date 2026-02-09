import SolutionsClient from "./SolutionsClient";

/**
 * FILE: src/app/solutions/page.js
 * Server Component - handles SEO metadata
 */

/* =======================
   SEO METADATA EXPORT
======================= */
export const metadata = {
  title: "Our Solutions - INNOVISION | AI Products & Industrial Automation",
  description:
    "Explore INNOVISION's comprehensive AI solutions: AI Products for intelligent automation, Industrial AI & Automation for smart manufacturing, and custom Software & Firmware Development services.",
  keywords:
    "AI solutions, AI products, Industrial AI, Factory automation, Predictive maintenance, Computer vision, NLP, Software development, Firmware development, Embedded systems, IoT integration, Smart manufacturing",
  authors: [{ name: "INNOVISION Corporation" }],
  openGraph: {
    title: "AI Solutions & Services - INNOVISION",
    description:
      "Comprehensive AI solutions from intelligent products to industrial automation and custom software development",
    type: "website",
    url: "https://innovision.com/solutions",
    images: [
      {
        url: "/banner-solutions.png",
        width: 1200,
        height: 630,
        alt: "INNOVISION Solutions",
      },
    ],
    siteName: "INNOVISION Corporation",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Services - INNOVISION",
    description:
      "AI Products, Industrial Automation, and Software Development solutions",
    images: ["/banner-solutions.png"],
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
    canonical: "https://innovision.com/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
