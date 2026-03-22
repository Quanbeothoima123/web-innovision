"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, CheckCircle2, Cpu, Eye, Microchip, Zap } from "lucide-react";

import styles from "./SeoAuditOptimizationFromHtml.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Key Achievements", href: "#key-achievements" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "FAQ", href: "#faq" },
];

const steps = [
  {
    title: "Crawl website",
    desc: "Nhap URL, he thong thu thap du lieu trang de phan tich ky thuat + noi dung.",
  },
  {
    title: "Nhan action plan",
    desc: "Bao cao ro rang theo muc do uu tien: High, Medium, Low va huong dan sua.",
  },
  {
    title: "Track ket qua",
    desc: "Theo doi diem SEO va conversion truoc/sau khi trien khai de danh gia ROI.",
  },
];

const competencies = [
  {
    icon: Bot,
    title: "AI Product Engineering",
    desc: "Design and ship production-ready AI products that align with business goals.",
    points: [
      "Rapid MVP to production roadmap",
      "Human-in-the-loop quality controls",
      "Built-in analytics and feedback loops",
    ],
    metric: "< 8 weeks to validated MVP",
  },
  {
    icon: Cpu,
    title: "LLM & NLP Systems",
    desc: "Build secure LLM workflows for automation, search, support, and decision support.",
    points: [
      "RAG pipelines with enterprise data",
      "Prompt/version governance",
      "Evaluation framework for reliability",
    ],
    metric: "Up to 65% support deflection",
  },
  {
    icon: Eye,
    title: "Edge AI & Vision",
    desc: "Deploy real-time AI inference at the edge for industrial and high-throughput use cases.",
    points: [
      "Low-latency model optimization",
      "Camera and sensor integration",
      "On-device monitoring and updates",
    ],
    metric: "< 120ms real-time inference",
  },
  {
    icon: Microchip,
    title: "Software + Firmware Integration",
    desc: "Bridge AI software with embedded systems for stable end-to-end solutions.",
    points: [
      "Embedded Linux and MCU workflows",
      "Secure OTA deployment strategy",
      "Cross-team DevOps and CI/CD",
    ],
    metric: "99.9% deployment reliability",
  },
];

const competencyProof = [
  { value: "50+", label: "AI Projects Delivered" },
  { value: "12+", label: "Industries Served" },
  { value: "98%", label: "On-time Delivery" },
  { value: "24/7", label: "Technical Support" },
];

const competencyUseCases = [
  "Smart Manufacturing",
  "Retail & Ecommerce",
  "Government & Enterprise",
];

const keyAchievementsData = [
  {
    label: "AI Vision for Manufacturing",
    desc: "Delivered proof-of-concept systems for automated OK/NG inspection with accuracy rates above 95%.",
    progress: "98%",
  },
  {
    label: "LLM Development for Enterprises & Government",
    desc: "Developed a Vietnamese domain-specific LLM with Retrieval-Augmented Generation (RAG) for knowledge management.",
    progress: "84%",
  },
  {
    label: "Firmware & IoT Services ",
    desc: "Exported embedded software and firmware solutions to clients in Asia and Europe.",
    progress: "76%",
  },
  {
    label: "Ecosystem Recognition",
    desc: "Accepted into global technology ecosystems (AWS, semiconductor partners, research collaborations).",
    progress: "92%",
  },
];

const clientPartners = [
  { name: "Infineon", logo: "/logo/infineon.webp" },
  { name: "NXP", logo: "/logo/nxp.webp" },
  { name: "Nuvoton", logo: "/logo/nuvoton.webp" },
  { name: "Nordic", logo: "/logo/nordic.webp" },
  { name: "Qualcomm", logo: "/logo/qualcomm.webp" },
  { name: "AWS", logo: "/logo/aws.webp" },
  { name: "VinFast", logo: "/logo/vinfast.webp" },
  { name: "ITMON", logo: "/logo/itmon.webp" },
  { name: "Lidinco", logo: "/logo/lidinco.webp" },
  { name: "Ais", logo: "/logo/ais.webp" },
  { name: "Hitec", logo: "/logo/hitec.webp" },
  { name: "Rostek", logo: "/logo/rostek.webp" },
];

const extraServices = [
  {
    title: "SEO Setup & Consulting",
    desc: "Perfect SEO setup without the technical hassle.",
    price: "$99",
    note: "one-time",
    cta: "Get Started",
  },
  {
    title: "Full SEO Overhaul",
    desc: "Fix critical SEO issues and unlock higher rankings - done-for-you.",
    price: "$300",
    note: "one-time",
    cta: "Get Started",
    featured: true,
    features: [
      "Complete on-page SEO overhaul",
      "Technical SEO fixes (indexing, sitemaps, canonicals)",
      "Mobile-first optimization",
      "Custom configuration for your theme",
      "Best results guaranteed for Shopify themes",
    ],
  },
  {
    title: "Custom eCommerce SEO Development",
    desc: "Tailored SEO engineering support for advanced stores and complex stacks.",
    price: "Custom",
    note: "project scope",
    cta: "Book Consultation",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Discovery & Alignment",
    desc: "We align on business goals, technical constraints, and target outcomes before coding.",
    points: [
      "Stakeholder and workflow mapping",
      "Data and system readiness assessment",
      "Success metrics and delivery plan",
    ],
  },
  {
    step: "02",
    title: "Architecture & Prototyping",
    desc: "We validate solution feasibility early with a practical prototype and clear architecture.",
    points: [
      "Solution blueprint and stack selection",
      "Rapid prototype for core use cases",
      "Risk review for security and scale",
    ],
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "We implement production workflows, integrate with your systems, and harden reliability.",
    points: [
      "Model and pipeline implementation",
      "API, platform, and device integration",
      "Quality checks and performance tuning",
    ],
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    desc: "We launch with monitoring, then continuously improve quality, speed, and business impact.",
    points: [
      "Production deployment and observability",
      "Team enablement and handover",
      "Ongoing optimization roadmap",
    ],
  },
];

const heroImages = [
  { src: "/AI_Product.webp", alt: "AI product showcase" },
  { src: "/IndustrialAI.webp", alt: "Industrial AI showcase" },
  { src: "/softwareAndFirmware.webp", alt: "Software and firmware showcase" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SeoAuditOptimizationFromHtml() {
  const reduceMotion = useReducedMotion();

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.65, ease: "easeOut" },
      };

  const cardAnim = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay, ease: "easeOut" },
        };

  return (
    <div className={cn("relative min-h-screen overflow-hidden", styles.wrap)}>
      <div
        className={cn("pointer-events-none absolute inset-0", styles.noise)}
      />
      <div className={cn(styles.blob, styles.blobOne)} />
      <div className={cn(styles.blob, styles.blobTwo)} />
      <div className={cn(styles.blob, styles.blobThree)} />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <main className="mt-0 space-y-12">
          <motion.section className="relative w-full" {...sectionAnim}>
            <div
              className={cn(
                "mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8",
                styles.sectionReveal,
              )}
            >
              <div className="w-full max-w-4xl text-center">
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/90 px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm"
                  {...cardAnim(0.05)}
                >
                  <Zap className="h-3.5 w-3.5 text-cyan-500" />
                  AI - LLM - Edge Computing
                </motion.div>

                <motion.h1
                  className="mx-auto mt-6 max-w-3xl text-[28px] font-semibold leading-[1.06] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-[56px]"
                  {...cardAnim(0.1)}
                >
                  Build the Future with
                  <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                    Applied AI Intelligence
                  </span>
                </motion.h1>

                <motion.p
                  className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base"
                  {...cardAnim(0.15)}
                >
                  We design and deploy production-grade AI systems for
                  enterprises that need speed, reliability, and measurable
                  business impact.
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                  {...cardAnim(0.2)}
                >
                  <Link
                    href="/solutions"
                    className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-2xl bg-slate-900 px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Explore Solutions
                  </Link>
                </motion.div>

                <motion.div
                  className={cn(
                    "mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3",
                    styles.heroGallery,
                  )}
                  {...cardAnim(0.24)}
                >
                  {heroImages.map((item, index) => (
                    <motion.div
                      key={item.alt}
                      className={styles.heroGalleryItem}
                      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      {...cardAnim(0.08 * index)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={720}
                        height={420}
                        className="h-36 w-full object-cover"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { value: "50+", label: "Enterprise Projects" },
                    { value: "98%", label: "Delivery Success" },
                    { value: "24/7", label: "Technical Support" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="rounded-2xl border border-white/70 bg-white/80 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur"
                      whileHover={reduceMotion ? undefined : { y: -5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      {...cardAnim(0.25 + index * 0.06)}
                    >
                      <div className="text-xl font-semibold tracking-[-0.01em] text-slate-900">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium text-slate-600"
                  {...cardAnim(0.32)}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/85 px-3 py-1.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    Enterprise-ready Architecture
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/85 px-3 py-1.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    Fast AI Prototyping
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/85 px-3 py-1.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    Scalable Cloud Deployment
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="core-competencies"
            className={cn(
              "rounded-[34px] border border-slate-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8",
              styles.sectionReveal,
            )}
            {...sectionAnim}
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                Our Core Competencies
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl">
                Deep Technical Capability,
                <span className="block text-cyan-500">
                  Measured Business Impact
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                We combine AI engineering, platform thinking, and delivery
                discipline to turn complex ideas into scalable products.
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {competencies.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={cn(
                    "rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
                    styles.cardLift,
                  )}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  {...cardAnim(index * 0.06)}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-slate-900">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-700">
                    {item.metric}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-4 sm:grid-cols-4">
              {competencyProof.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {competencyUseCases.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="how-we-work"
            className={cn(
              "rounded-[34px] border border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8",
              styles.sectionReveal,
            )}
            {...sectionAnim}
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                How We Work
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl">
                A Delivery Process Built
                <span className="block text-cyan-500">
                  for Speed and Reliability
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                From strategy to deployment, our team follows a clear execution
                model to reduce risk and deliver measurable outcomes.
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {howWeWork.map((item, index) => (
                <motion.article
                  key={item.step}
                  className={cn(
                    "rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
                    styles.cardLift,
                  )}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  {...cardAnim(index * 0.06)}
                >
                  <div className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-500 px-2 text-xs font-semibold tracking-[0.08em] text-slate-900">
                    {item.step}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400"
              >
                See Delivery Cases
              </Link>
            </div>
          </motion.section>

          <motion.section
            id="key-achievements"
            className={cn(
              "rounded-[34px] border border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f7fcff_100%)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8",
              styles.sectionReveal,
            )}
            {...sectionAnim}
          >
            <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
              <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                <p className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  Key Achievements
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-3xl">
                  Proof That Our
                  <span className="block text-cyan-500">Execution Works</span>
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Driving digital transformation through proven AI solutions.
                </p>
                <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Outcome Reliability
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-slate-900">
                    4.9/5
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Average stakeholder satisfaction from post-delivery reviews.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {keyAchievementsData.map((item, index) => (
                  <motion.article
                    key={item.label}
                    className={cn(
                      "flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
                      styles.cardLift,
                    )}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    {...cardAnim(index * 0.05)}
                  >
                    <div className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
                      {item.value}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                    <div className="mt-auto pt-4">
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                          initial={reduceMotion ? undefined : { width: 0 }}
                          whileInView={
                            reduceMotion ? undefined : { width: item.progress }
                          }
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          style={reduceMotion ? { width: item.progress } : undefined}
                        />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="clients-partners"
            className={cn(
              "rounded-[34px] border border-slate-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8",
              styles.sectionReveal,
            )}
            {...sectionAnim}
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                Clients & Partners
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl">
                Trusted by Teams
                <span className="block text-cyan-500">Building at Scale</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                We collaborate with technology leaders, manufacturers, and
                enterprise teams to deliver AI and embedded solutions that work
                in production.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {clientPartners.map((item, index) => (
                <motion.div
                  key={item.name}
                  className={cn(
                    "flex h-24 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 px-5",
                    styles.cardLift,
                    styles.logoTile,
                  )}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  {...cardAnim(index * 0.03)}
                >
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={140}
                    height={48}
                    className={styles.logoImage}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
