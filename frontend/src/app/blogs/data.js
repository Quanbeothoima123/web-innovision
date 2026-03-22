export const blogCategories = [
  "All",
  "Company News",
  "Project Success",
  "Engineering",
  "AI & LLM",
  "Events",
];

export const blogPosts = [
  {
    slug: "government-ai-assistant-delivery",
    title: "INNOVISION Delivers Enterprise AI Assistant for Government Operations",
    excerpt:
      "How our team reduced document retrieval time from hours to seconds with secure on-premise LLM workflows.",
    category: "Project Success",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    image: "/portfolio/banner/government_document_AI.webp",
    featured: true,
    keywords: ["government", "document ai", "on-premise", "rag", "llm"],
    content: [
      {
        heading: "Context",
        text: "Government teams often depend on fragmented archives and manual retrieval procedures. This creates delays for internal review cycles and citizen-facing services.",
      },
      {
        heading: "What We Built",
        text: "We implemented an on-premise assistant using OCR, retrieval pipelines, and domain-tuned LLM prompts. Every answer includes source grounding to improve trust and traceability.",
      },
      {
        heading: "Results",
        text: "Search turnaround dropped from hours to seconds, with higher consistency across departments and lower operational overhead.",
      },
    ],
    relatedLinks: [
      { label: "Case Study", href: "/portfolio/government-document-ai-2" },
      { label: "AI Products", href: "/solutions/ai-products-2" },
    ],
  },
  {
    slug: "reliable-rag-pipelines-production",
    title: "Behind the Build: Designing Reliable RAG Pipelines for Production",
    excerpt:
      "Practical lessons from deploying retrieval systems with quality checks, latency targets, and governance.",
    category: "Engineering",
    date: "Mar 02, 2026",
    readTime: "7 min read",
    image: "/AI_Product.webp",
    keywords: ["rag", "retrieval", "production", "latency", "governance"],
    content: [
      {
        heading: "Quality Controls First",
        text: "Production RAG systems need retrieval evaluation, citation checks, and fallback logic before they are exposed to mission-critical workflows.",
      },
      {
        heading: "Latency Discipline",
        text: "We optimize chunking, embedding dimensions, and caching layers to keep response times predictable under load.",
      },
      {
        heading: "Governance and Safety",
        text: "Prompt versioning, guardrails, and monitoring dashboards ensure long-term reliability and safer iterations.",
      },
    ],
    relatedLinks: [
      { label: "AI Products", href: "/solutions/ai-products-2" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    slug: "industrial-ai-rollout-framework",
    title: "From Pilot to Scale: Our Industrial AI Rollout Framework",
    excerpt:
      "A step-by-step framework to move from factory pilot to stable multi-line deployment.",
    category: "AI & LLM",
    date: "Feb 25, 2026",
    readTime: "5 min read",
    image: "/IndustrialAI.webp",
    keywords: ["industrial ai", "factory", "pilot", "scale", "mlops"],
    content: [
      {
        heading: "Pilot with Clear Scope",
        text: "We start with one line and explicit KPIs so teams can verify business impact quickly.",
      },
      {
        heading: "Standardized MLOps",
        text: "Model versioning, alerting, and rollback procedures are introduced early to avoid fragile scaling.",
      },
      {
        heading: "Scale by Reusable Patterns",
        text: "Once validated, we replicate infrastructure and monitoring templates across additional lines.",
      },
    ],
    relatedLinks: [{ label: "Industrial AI", href: "/solutions/coming-soon" }],
  },
  {
    slug: "50-projects-milestone",
    title: "Company Milestone: 50+ AI Projects Delivered Across 12 Industries",
    excerpt:
      "A quick look at recent achievements and what this means for our next growth phase.",
    category: "Company News",
    date: "Feb 16, 2026",
    readTime: "4 min read",
    image: "/banner-aboutus.webp",
    keywords: ["milestone", "company news", "projects", "achievement"],
    content: [
      {
        heading: "Milestone Snapshot",
        text: "INNOVISION has now delivered over 50 projects spanning enterprise AI, embedded systems, and platform engineering.",
      },
      {
        heading: "Why This Matters",
        text: "The diversity of domains helped us build reusable delivery assets that reduce risk and accelerate implementation.",
      },
      {
        heading: "Next Chapter",
        text: "We are expanding regional partnerships and investing further in productized AI services for long-term client value.",
      },
    ],
    relatedLinks: [{ label: "About Us", href: "/about-us" }],
  },
  {
    slug: "delivery-sprints-software-firmware",
    title: "How We Run Delivery Sprints for Software + Firmware Teams",
    excerpt:
      "Our operating model for cross-functional teams building cloud services and embedded systems together.",
    category: "Engineering",
    date: "Feb 05, 2026",
    readTime: "6 min read",
    image: "/softwareAndFirmware.webp",
    keywords: ["software", "firmware", "sprint", "agile", "delivery"],
    content: [
      {
        heading: "Shared Definition of Done",
        text: "Backend, frontend, firmware, and QA align on one sprint contract with technical and business acceptance criteria.",
      },
      {
        heading: "Integration in Every Sprint",
        text: "We avoid late surprises by integrating device, cloud, and app layers continuously.",
      },
      {
        heading: "Transparent Reporting",
        text: "Each sprint ends with a demo, risk log update, and clear next-step priorities.",
      },
    ],
    relatedLinks: [
      { label: "Software & Firmware", href: "/solutions/software-firmware-development-2" },
    ],
  },
  {
    slug: "edge-ai-vision-quality-control",
    title: "Edge AI Vision: Raising Quality Control Accuracy on Production Lines",
    excerpt:
      "How edge deployment reduced cloud dependency while keeping inspection speed stable in manufacturing.",
    category: "AI & LLM",
    date: "Jan 29, 2026",
    readTime: "6 min read",
    image: "/IndustrialAI.webp",
    keywords: ["edge ai", "vision", "quality control", "factory"],
    content: [
      {
        heading: "Why Edge First",
        text: "For latency-sensitive inspection tasks, edge inference keeps response times consistent even when network quality changes.",
      },
      {
        heading: "Deployment Pattern",
        text: "We used model quantization, runtime monitoring, and controlled rollback to keep production stable.",
      },
      {
        heading: "Impact",
        text: "The line improved detection consistency and reduced manual re-check effort.",
      },
    ],
    relatedLinks: [{ label: "Industrial AI", href: "/solutions/coming-soon" }],
  },
  {
    slug: "ai-ops-observability-playbook",
    title: "AI Ops Observability Playbook for Long-running Enterprise Systems",
    excerpt:
      "Monitoring, alerting, and quality checks that help AI services stay healthy after go-live.",
    category: "Engineering",
    date: "Jan 22, 2026",
    readTime: "7 min read",
    image: "/AI_Product.webp",
    keywords: ["ai ops", "monitoring", "observability", "mlops"],
    content: [
      {
        heading: "Operational Baseline",
        text: "Before scale-up, every service should have latency, error-rate, and quality dashboards.",
      },
      {
        heading: "Incident Readiness",
        text: "Define alert thresholds, escalation owners, and rollback procedures from day one.",
      },
      {
        heading: "Continuous Improvement",
        text: "Weekly review loops align model quality trends with product and business KPIs.",
      },
    ],
    relatedLinks: [{ label: "Solutions", href: "/solutions" }],
  },
  {
    slug: "enterprise-rag-security-guidelines",
    title: "Security Guidelines for Enterprise RAG Deployments",
    excerpt:
      "Practical controls for data access, source grounding, and prompt governance in enterprise RAG.",
    category: "Engineering",
    date: "Jan 16, 2026",
    readTime: "6 min read",
    image: "/banner-aboutus.webp",
    keywords: ["rag security", "enterprise ai", "governance", "access control"],
    content: [
      {
        heading: "Data Boundaries",
        text: "Restrict retrieval scope by role and context to prevent information overexposure.",
      },
      {
        heading: "Prompt Governance",
        text: "Use versioned prompts with review workflows and auditable changes.",
      },
      {
        heading: "Traceability",
        text: "Require citations and source references in every critical answer path.",
      },
    ],
    relatedLinks: [{ label: "AI Products", href: "/solutions/ai-products-2" }],
  },
  {
    slug: "innovision-partnership-expansion-2026",
    title: "INNOVISION Expands Regional Partnership Network in 2026",
    excerpt:
      "A strategic update on ecosystem partnerships to accelerate delivery and support.",
    category: "Company News",
    date: "Jan 09, 2026",
    readTime: "4 min read",
    image: "/banner-aboutus.webp",
    keywords: ["partnership", "company news", "ecosystem", "2026"],
    content: [
      {
        heading: "Partnership Scope",
        text: "The new network includes cloud, semiconductor, and implementation partners across regions.",
      },
      {
        heading: "Customer Value",
        text: "Clients gain faster onboarding and broader technical support coverage.",
      },
      {
        heading: "Next Steps",
        text: "The team is packaging repeatable delivery tracks for high-impact use cases.",
      },
    ],
    relatedLinks: [{ label: "About Us", href: "/about-us" }],
  },
  {
    slug: "fintech-kyc-automation-results",
    title: "Fintech KYC Automation: Results from a Multi-stage AI Pipeline",
    excerpt:
      "From OCR to verification scoring, a breakdown of the architecture and business impact.",
    category: "Project Success",
    date: "Jan 03, 2026",
    readTime: "6 min read",
    image: "/portfolio/banner/fintech_verification_AI.webp",
    keywords: ["fintech", "kyc", "ocr", "verification"],
    content: [
      {
        heading: "Architecture",
        text: "The pipeline combines OCR extraction, rule checks, and model-assisted review prioritization.",
      },
      {
        heading: "Risk Controls",
        text: "Human review stayed in the loop for edge cases and regulatory compliance.",
      },
      {
        heading: "Outcome",
        text: "Processing speed improved with higher consistency in review decisions.",
      },
    ],
    relatedLinks: [{ label: "Case Study", href: "/portfolio/fintech-verification-ai" }],
  },
  {
    slug: "event-ai-manufacturing-summit-2026",
    title: "Event Recap: AI Manufacturing Summit 2026",
    excerpt:
      "Key takeaways from expert sessions on vision AI, edge deployment, and factory modernization.",
    category: "Events",
    date: "Dec 26, 2025",
    readTime: "5 min read",
    image: "/IndustrialAI.webp",
    keywords: ["event", "summit", "manufacturing", "edge"],
    content: [
      {
        heading: "Main Themes",
        text: "Teams focused on reliability, maintainability, and change management for industrial AI adoption.",
      },
      {
        heading: "Customer Questions",
        text: "Most discussions centered around integration timelines and ROI measurement.",
      },
      {
        heading: "Follow-up",
        text: "We are releasing implementation guides based on the summit sessions.",
      },
    ],
    relatedLinks: [{ label: "Portfolio", href: "/portfolio" }],
  },
  {
    slug: "llm-evaluation-framework-practical-guide",
    title: "Practical Guide: LLM Evaluation Framework for Product Teams",
    excerpt:
      "A simple but effective framework to measure quality, safety, and drift in LLM features.",
    category: "AI & LLM",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    image: "/AI_Product.webp",
    keywords: ["llm eval", "quality", "safety", "drift"],
    content: [
      {
        heading: "Metric Design",
        text: "Use task-specific scoring and weighted benchmarks aligned to business outcomes.",
      },
      {
        heading: "Test Strategy",
        text: "Combine offline benchmark sets with production shadow tests for realistic signals.",
      },
      {
        heading: "Governance",
        text: "Treat evaluation changes like product changes with approvals and release notes.",
      },
    ],
    relatedLinks: [{ label: "AI Products", href: "/solutions/ai-products-2" }],
  },
  {
    slug: "embedded-cloud-integration-patterns",
    title: "Embedded + Cloud Integration Patterns We Use in Client Delivery",
    excerpt:
      "Reliable design patterns for syncing device firmware workflows with cloud application layers.",
    category: "Engineering",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    image: "/softwareAndFirmware.webp",
    keywords: ["embedded", "cloud", "iot", "integration"],
    content: [
      {
        heading: "Pattern 1: Event Contracts",
        text: "Define strict message schemas to stabilize communication between device and cloud services.",
      },
      {
        heading: "Pattern 2: Controlled Rollout",
        text: "Use staged release channels and telemetry checks before broad OTA deployment.",
      },
      {
        heading: "Pattern 3: Failure Recovery",
        text: "Implement retry and fallback paths to keep device operations resilient.",
      },
    ],
    relatedLinks: [
      { label: "Software & Firmware", href: "/solutions/software-firmware-development-2" },
    ],
  },
  {
    slug: "real-estate-document-ai-scale-up",
    title: "Scaling Real Estate Document AI from Pilot to Daily Operations",
    excerpt:
      "What changed between pilot success and operational reliability in a document-heavy workflow.",
    category: "Project Success",
    date: "Dec 03, 2025",
    readTime: "5 min read",
    image: "/portfolio/banner/real_estate_AI_assistant.webp",
    keywords: ["real estate", "document ai", "scale", "operations"],
    content: [
      {
        heading: "Pilot Learnings",
        text: "Early wins came from narrowing scope and tightening data quality standards.",
      },
      {
        heading: "Scale Challenges",
        text: "The largest issues were process variation and metadata inconsistency across teams.",
      },
      {
        heading: "Operational Model",
        text: "Standardized templates and review checkpoints improved long-term reliability.",
      },
    ],
    relatedLinks: [{ label: "Case Study", href: "/portfolio/real-estate-ai-assistant" }],
  },
  {
    slug: "year-end-engineering-retrospective-2025",
    title: "Engineering Retrospective 2025: Delivery Lessons That Matter",
    excerpt:
      "A reflection on architecture, team process, and product quality practices from the past year.",
    category: "Company News",
    date: "Nov 27, 2025",
    readTime: "6 min read",
    image: "/banner-aboutus.webp",
    keywords: ["retrospective", "engineering", "delivery", "team process"],
    content: [
      {
        heading: "What Worked",
        text: "Cross-functional sprint planning reduced handoff friction and improved predictability.",
      },
      {
        heading: "What We Improved",
        text: "We invested more in QA automation and pre-release validation for AI workflows.",
      },
      {
        heading: "What Comes Next",
        text: "The next phase focuses on reusable accelerators and stronger observability standards.",
      },
    ],
    relatedLinks: [{ label: "About Us", href: "/about-us" }],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
