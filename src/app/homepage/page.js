import Homepage from "@/components/HomePage";

/**
 * FILE: src/app/page.js
 * Server Component - handles SEO metadata for homepage
 */

/* =======================
   SEO METADATA EXPORT
======================= */
export const metadata = {
  title:
    "INNOVISION | AI, LLM & Edge Computing Solutions - Digital Transformation",
  description:
    "INNOVISION Corporation delivers cutting-edge AI, LLM, and Edge Computing solutions across Southeast Asia. We specialize in AI Products, Industrial AI & Automation, and custom Software & Firmware Development for digital transformation.",
  keywords:
    "AI solutions, LLM platform, Edge Computing, Digital Transformation, AI Products, Industrial Automation, Computer Vision, NLP, Predictive Maintenance, Software Development, Firmware Development, Embedded Systems, Smart Manufacturing, Vietnam AI company, Southeast Asia technology",
  authors: [{ name: "INNOVISION Corporation" }],
  creator: "INNOVISION Corporation",
  publisher: "INNOVISION Corporation",
  applicationName: "INNOVISION",

  metadataBase: new URL("https://innovision.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://innovision.com",
    siteName: "INNOVISION Corporation",
    title: "INNOVISION - Leading AI & Edge Computing Solutions",
    description:
      "Transform your business with AI-driven innovation. INNOVISION delivers enterprise LLM, Edge AI, Industrial Automation, and custom software solutions.",
    images: [
      {
        url: "/bg.png",
        width: 1200,
        height: 630,
        alt: "INNOVISION - AI and Edge Computing Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "INNOVISION - AI & Edge Computing Solutions",
    description:
      "Leading AI technology company specializing in LLM, Edge AI, and Industrial Automation",
    images: ["/bg.png"],
    creator: "@innovision",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://innovision.com",
    languages: {
      "en-US": "https://innovision.com",
      "vi-VN": "https://innovision.com/vi",
    },
  },

  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  category: "Technology",
};

export default function Page() {
  return <Homepage />;
}
