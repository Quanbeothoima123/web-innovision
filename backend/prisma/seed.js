const path = require("path");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config();

const prisma = new PrismaClient();

const blogSeed = [
  {
    slug: "government-ai-assistant-delivery",
    title: "INNOVISION Delivers Enterprise AI Assistant for Government Operations",
    excerpt:
      "How our team reduced document retrieval time from hours to seconds with secure on-premise LLM workflows.",
    category: "Project Success",
    dateLabel: "Mar 10, 2026",
    readTime: "6 min read",
    image: "/portfolio/banner/government_document_AI.webp",
    featured: true,
    published: true,
    keywords: ["government", "document ai", "on-premise", "rag", "llm"],
    content: [
      {
        heading: "Context",
        text: "Government teams often depend on fragmented archives and manual retrieval procedures.",
      },
      {
        heading: "What We Built",
        text: "We implemented an on-premise assistant using OCR, retrieval pipelines, and domain-tuned LLM prompts.",
      },
    ],
    relatedLinks: [{ label: "Case Study", href: "/portfolio/government-document-ai-2" }],
  },
  {
    slug: "reliable-rag-pipelines-production",
    title: "Behind the Build: Designing Reliable RAG Pipelines for Production",
    excerpt:
      "Practical lessons from deploying retrieval systems with quality checks, latency targets, and governance.",
    category: "Engineering",
    dateLabel: "Mar 02, 2026",
    readTime: "7 min read",
    image: "/AI_Product.webp",
    featured: false,
    published: true,
    keywords: ["rag", "retrieval", "production", "latency", "governance"],
    content: [
      {
        heading: "Quality Controls First",
        text: "Production RAG systems need retrieval evaluation, citation checks, and fallback logic.",
      },
    ],
    relatedLinks: [{ label: "AI Products", href: "/solutions/ai-products-2" }],
  },
  {
    slug: "50-projects-milestone",
    title: "Company Milestone: 50+ AI Projects Delivered Across 12 Industries",
    excerpt:
      "A quick look at recent achievements and what this means for our next growth phase.",
    category: "Company News",
    dateLabel: "Feb 16, 2026",
    readTime: "4 min read",
    image: "/banner-aboutus.webp",
    featured: false,
    published: true,
    keywords: ["milestone", "company news", "projects", "achievement"],
    content: [
      {
        heading: "Milestone Snapshot",
        text: "INNOVISION has now delivered over 50 projects spanning enterprise AI and platform engineering.",
      },
    ],
    relatedLinks: [{ label: "About Us", href: "/about-us" }],
  },
];

const portfolioSeed = [
  {
    slug: "real-estate-ai-assistant",
    title: "Real Estate AI Assistant",
    metric: "-35% review time",
    summary:
      "LLM + RAG combined with document intelligence to verify and classify real-estate records faster.",
    category: "AI Products",
    image: "/portfolio/banner/real_estate_AI_assistant.webp",
    route: "/portfolio/real-estate-ai-assistant",
    tags: ["LLM", "RAG", "Real Estate"],
    featured: true,
    published: true,
    sortOrder: 1,
  },
  {
    slug: "high-traffic-web-platform",
    title: "High-traffic Web Platform",
    metric: "<300ms latency",
    summary:
      "Scalable web platform handling 1,000+ concurrent users with real-time synchronization.",
    category: "Software & Firmware Development",
    image: "/portfolio/banner/high_traffic_web_platform.webp",
    route: "/portfolio/high-traffic-web-platform",
    tags: ["WebSockets", "Cloud", "Scale"],
    featured: false,
    published: true,
    sortOrder: 2,
  },
  {
    slug: "fintech-verification-ai",
    title: "Fintech Verification AI",
    metric: "95%+ accuracy",
    summary:
      "Document AI pipeline for fintech verification with OCR, classification, and quality checks.",
    category: "AI Products",
    image: "/portfolio/banner/fintech_verification_AI.webp",
    route: "/portfolio/fintech-verification-ai",
    tags: ["Computer Vision", "OCR", "Fintech"],
    featured: false,
    published: true,
    sortOrder: 3,
  },
];

const solutionsSeed = [
  {
    slug: "ai-products",
    title: "AI Products",
    desc: "A suite of AI products that automates analysis, Q&A, and real-time decision making.",
    image: "/AI_Product.webp",
    route: "/solutions/ai-products-2",
    category: "Artificial Intelligence",
    metric: "50+ deployments",
    accent: "from-cyan-500 to-sky-500",
    icon: "Sparkles",
    features: ["Predictive Analytics", "Natural Language Processing", "Real-time Q&A"],
    published: true,
    sortOrder: 1,
  },
  {
    slug: "industrial-ai-automation",
    title: "Industrial AI & Automation",
    desc: "End-to-end industrial AI solutions for computer vision inspection and factory integration.",
    image: "/IndustrialAI.webp",
    route: "/solutions/coming-soon",
    category: "Industrial Automation",
    metric: "<120ms inference",
    accent: "from-blue-500 to-indigo-500",
    icon: "Cpu",
    features: ["Defect Detection", "Predictive Maintenance", "IoT Integration"],
    published: true,
    sortOrder: 2,
  },
  {
    slug: "software-firmware-development",
    title: "Software & Firmware Development",
    desc: "Expert software engineering and embedded system development for enterprise-grade products.",
    image: "/softwareAndFirmware.webp",
    route: "/solutions/software-firmware-development-2",
    category: "Software Development",
    metric: "99.9% reliability",
    accent: "from-teal-500 to-cyan-500",
    icon: "Layers",
    features: ["Custom Web/App", "Embedded C/C++", "Cloud Architecture"],
    published: true,
    sortOrder: 3,
  },
];

async function seedBlogs() {
  for (const item of blogSeed) {
    await prisma.blogPost.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }
}

async function seedPortfolio() {
  for (const item of portfolioSeed) {
    await prisma.portfolioItem.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }
}

async function seedSolutions() {
  for (const item of solutionsSeed) {
    await prisma.solutionItem.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }
}

async function main() {
  await seedBlogs();
  await seedPortfolio();
  await seedSolutions();
  // eslint-disable-next-line no-console
  console.log("Seed completed: blogs, portfolio, solutions");
}

main()
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
