export const CATEGORIES = [
  "All Project",
  "AI Products",
  "Industrial AI & Automation",
  "Software & Firmware Development",
];

export const SORTS = ["Featured", "Latest", "Most Used"];

export const PROJECTS = [
  {
    id: "1",
    slug: "real-estate-ai-assistant",
    title: "Real Estate AI Assistant",
    metric: "-35% review time",
    summary:
      "LLM-powered platform helping property developers track apartments, manage inquiries, and generate reports with 1M+ documents indexed.",
    tags: ["LLM", "RAG", "Real Estate"],
    category: "AI Products",
    image: "/demo/real-estate.jpg",
    featured: true,
    usage: 90,
    date: "2025-01-10",
    layout: "large",
  },
  {
    id: "2",
    slug: "high-traffic-web-platform",
    title: "High-traffic Web Platform",
    metric: "<300ms latency",
    summary:
      "Scalable web infrastructure handling 1,000+ concurrent users with real-time data synchronization.",
    tags: ["WebSockets", "Cloud", "Scale"],
    category: "Software & Firmware Development",
    image: "/demo/high-traffic.jpg",
    featured: true,
    usage: 70,
    date: "2025-01-20",
    layout: "rightTop",
  },
  {
    id: "3",
    slug: "fintech-verification-ai",
    title: "Fintech Verification AI",
    metric: "95%+ accuracy",
    summary:
      "Automated identity verification system processing thousands of documents with advanced fraud detection.",
    tags: ["Computer Vision", "OCR", "Fintech"],
    category: "AI Products",
    image: "/demo/fintech.jpg",
    featured: true,
    usage: 80,
    date: "2025-02-01",
    layout: "rightBottom",
  },
  {
    id: "4",
    slug: "government-document-ai",
    title: "Government Document AI",
    metric: "60% faster processing",
    summary:
      "Intelligent document processing for government agencies with multi-language support and compliance tracking.",
    tags: ["NLP", "Document AI", "Gov Tech"],
    category: "AI Products",
    image: "/demo/gov.jpg",
    featured: false,
    usage: 55,
    date: "2025-02-12",
  },
  {
    id: "5",
    slug: "marketing-content-assistant",
    title: "Marketing Content Assistant",
    metric: "3x content output",
    summary:
      "AI-powered content generation platform helping marketing teams create high-quality campaigns faster.",
    tags: ["GPT-4", "Content Gen", "Marketing"],
    category: "AI Products",
    image: "/demo/marketing.jpg",
    featured: false,
    usage: 60,
    date: "2025-02-18",
  },
];
