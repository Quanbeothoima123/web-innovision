import { site } from "./lib/site";

export default function sitemap() {
  const now = new Date();

  const paths = [
    "/",
    "/homepage/",
    "/about-us/",
    "/solutions/",
    "/solutions/ai-products-2/",
    "/solutions/coming-soon/",
    "/solutions/software-firmware-development-2/",
    "/portfolio/",
    "/portfolio/real-estate-ai-assistant/",
    "/portfolio/fintech-verification-ai/",
    "/portfolio/government-document-ai-2/",
    "/portfolio/marketing-content-assistant-2/",
    "/portfolio/high-traffic-web-platform/",
  ];

  return paths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.8,
  }));
}
