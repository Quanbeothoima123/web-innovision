<<<<<<< HEAD
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
=======
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Clock, Star } from "lucide-react";
import Link from "next/link";

/**
 * FILE: src/app/portfolio/page.js
 *
 * Updates:
 * 1) Layout: 2 items trên (row 1), 3 items dưới (row 2)
 * 2) Gradient: Xanh nước biển + Trắng
 * 3) Không dùng large/featured layout phức tạp
 */

/* =======================
   DATA
======================= */
const TABS = [
  "All Project",
  "AI Products",
  "Industrial AI & Automation",
  "Software & Firmware Development",
];

const ALL_PROJECTS = [
  {
    id: "1",
    title: "Real Estate AI Assistant",
    metric: "-35% review time",
    summary:
      "LLM + RAG combined with Document AI to automatically verify and classify financial transactions",
    tags: ["LLM", "RAG", "Real Estate"],
    category: "AI Products",
    image: "/portfolio/banner/real_estate_AI_assistant.png",
    route: "/portfolio/real-estate-ai-assistant",
  },
  {
    id: "2",
    title: "High-traffic Web Platform",
    metric: "<300ms latency",
    summary:
      "LLM-powered document intelligence system that revolutionizes government archive management with secure, lightning-fast search and retrieval capabilities.",
    tags: ["WebSockets", "Cloud", "Scale"],
    category: "Software & Firmware Development",
    image: "/portfolio/banner/high_traffic_web_platform.png",
    route: "/portfolio/high-traffic-web-platform",
  },
  {
    id: "3",
    title: "Fintech Verification AI",
    metric: "95%+ accuracy",
    summary:
      "LLM + RAG combined with Document AI to automatically verify and classify financial transactions",
    tags: ["Computer Vision", "OCR", "Fintech"],
    category: "AI Products",
    image: "/portfolio/banner/fintech_verification_AI.png",
    route: "/portfolio/fintech-verification-ai",
  },
  {
    id: "4",
    title: "Government Document AI",
    metric: "60% faster processing",
    summary:
      "LLM-powered document intelligence system that revolutionizes government archive management with secure, lightning-fast search and retrieval capabilities.",
    tags: ["NLP", "Document AI", "Gov Tech"],
    category: "AI Products",
    image: "/portfolio/banner/government_document_AI.png",
    route: "/portfolio/government-document-ai-2",
  },
  {
    id: "5",
    title: "Marketing Content Assistant",
    metric: "3x content output",
    summary:
      "LLM-powered document intelligence system that revolutionizes government archive management with secure, lightning-fast search and retrieval capabilities.",
    tags: ["GPT-4", "Content Gen", "Marketing"],
    category: "AI Products",
    image: "/portfolio/banner/marketing_content_assistant.png",
    route: "/portfolio/marketing-content-assistant-2",
  },
];

/* =======================
   HERO
======================= */
function PortfolioHero({ scrollY }) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Background image + parallax */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner-portfolio.png')",
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />

      {/* Overlay tối nhẹ */}
      <div className="absolute inset-0 z-[0] bg-black/1" />

      {/* Gradient trắng trên/dưới */}
      <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white via-white/40 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-left w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[44px] md:text-[72px] font-bold text-[#3c90fc] tracking-tighter"
        >
          OUR PROJECTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-[16px] md:text-[18px] text-[#000000] font-medium max-w-2xl"
        >
          See how INNOVISION delivers AI-driven solutions across industries
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-3 text-[14px] md:text-[16px] text-[#000000]/90 max-w-3xl leading-relaxed"
        >
          We build fast, scalable AI solutions, from LLM platforms to Edge and
          embedded systems, that help teams ship smarter and innovate faster.
        </motion.p>
      </div>
    </div>
  );
}

/* =======================
   CARDS
======================= */
function ProjectCard({ title, metric, summary, tags, image, index, route }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Glass Card - Gradient xanh nước biển + trắng */}
      <motion.div
        className="relative h-full rounded-3xl border border-white/80 shadow-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(224, 247, 250, 0.7) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(240, 253, 255, 0.7) 100%)",
          backdropFilter: "blur(12px)",
        }}
        whileHover={{
          y: -8,
          boxShadow: "0 24px 48px rgba(6, 182, 212, 0.15)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Hover Glow - Cyan/Teal */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-teal-50/30 to-blue-50/40"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="relative p-5">
          {/* Metric Badge - Cyan/Teal */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <span className="text-sm font-semibold text-cyan-700">
              {metric}
            </span>
          </div>

          <h3 className="font-bold text-neutral-900 mb-2 text-xl">{title}</h3>

          <p className="text-neutral-600 leading-relaxed mb-3 text-sm line-clamp-3">
            {summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-xs font-medium text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href={route}>
            <motion.button
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm group/cta"
              whileHover={{ x: 4 }}
              type="button"
            >
              <span>Learn more</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </motion.div>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PlaceholderCard({ index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative h-full"
    >
      <div
        className="h-full rounded-3xl border border-dashed border-cyan-200/80 shadow-sm overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(224, 247, 250, 0.4) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(240, 253, 255, 0.4) 100%)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="h-full flex flex-col items-center justify-center p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-cyan-600/50" strokeWidth={1.5} />
          </div>
          <h4 className="text-lg font-semibold text-neutral-400 mb-2">
            Coming Soon
          </h4>
          <p className="text-sm text-neutral-400">New project in development</p>
        </div>
      </div>
    </motion.div>
  );
}

/* Layout: 2 items top row, 3 items bottom row */
function BentoGrid({ projects, activeTab }) {
  const filteredProjects =
    activeTab === "All Project"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="min-h-[800px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -12, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 12, filter: "blur(4px)" }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {filteredProjects.length > 0 ? (
              <>
                {/* Row 1: 2 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.slice(0, 2).map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      metric={project.metric}
                      summary={project.summary}
                      tags={project.tags}
                      image={project.image}
                      index={index}
                      route={project.route}
                    />
                  ))}
                </div>

                {/* Row 2: 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.slice(2, 5).map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      metric={project.metric}
                      summary={project.summary}
                      tags={project.tags}
                      image={project.image}
                      index={index + 2}
                      route={project.route}
                    />
                  ))}

                  {/* Fill remaining slots with placeholders if needed */}
                  {filteredProjects.length === 3 && (
                    <>
                      <PlaceholderCard index={3} />
                      <PlaceholderCard index={4} />
                    </>
                  )}
                  {filteredProjects.length === 4 && (
                    <PlaceholderCard index={4} />
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Row 1: 2 placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PlaceholderCard index={0} />
                  <PlaceholderCard index={1} />
                </div>

                {/* Row 2: 3 placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PlaceholderCard index={2} />
                  <PlaceholderCard index={3} />
                  <PlaceholderCard index={4} />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* =======================
   SORT TOGGLE
======================= */
function SortToggle({ activeSort, onSortChange }) {
  const sortOptions = useMemo(
    () => [
      { label: "Featured", icon: Star },
      { label: "Latest", icon: Clock },
      { label: "Most Used", icon: TrendingUp },
    ],
    [],
  );

  return (
    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80 p-1.5 shadow-sm">
      {sortOptions.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => onSortChange(label)}
          className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          type="button"
        >
          {activeSort === label && (
            <motion.div
              layoutId="sort-indicator"
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span
            className={`relative z-10 flex items-center gap-2 ${
              activeSort === label ? "text-white" : "text-neutral-600"
            }`}
          >
            <Icon className="w-4 h-4" strokeWidth={2} />
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

/* =======================
   CATEGORY NAV
======================= */
function CategoryNavigation({ tabs, activeTab, onTabChange, variant }) {
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabRefs.current[activeIndex];
    if (!activeTabElement) return;

    if (variant === "vertical") {
      setIndicatorStyle({
        top: activeTabElement.offsetTop,
        left: 0,
        height: activeTabElement.offsetHeight,
        width: 0,
      });
    } else {
      setIndicatorStyle({
        top: 0,
        left: activeTabElement.offsetLeft,
        height: 0,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab, tabs, variant]);

  /* VERTICAL */
  if (variant === "vertical") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="vertical"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed left-8 top-24 bottom-24 z-30 flex items-center"
        >
          <div className="relative flex flex-col gap-2">
            {/* Outer Rail */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 bg-white/15 backdrop-blur-[14px]"
                style={{
                  boxShadow:
                    "inset 0 1px 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.08)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[40%]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                  mixBlendMode: "overlay",
                }}
              />
              <div
                className="absolute top-0 bottom-0 left-0 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.4) 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px 128px",
                }}
              />
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-2 p-2 max-h-[calc(100vh-192px)] overflow-y-auto no-scrollbar">
              {/* Active Capsule */}
              <motion.div
                className="absolute left-2 right-2 rounded-[24px] pointer-events-none overflow-hidden"
                initial={false}
                animate={{
                  top: indicatorStyle.top,
                  height: indicatorStyle.height,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 28,
                  mass: 0.8,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.18) 100%)",
                    backdropFilter: "blur(8px)",
                    boxShadow:
                      "inset 0 1px 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px -2px rgba(6, 182, 212, 0.3)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-[24px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(20, 184, 166, 0.12) 50%, rgba(14, 165, 233, 0.15) 100%)",
                    opacity: 0.6,
                    filter: "blur(1px)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-[50%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
                    borderRadius: "24px 24px 0 0",
                  }}
                />
              </motion.div>

              {/* Tabs */}
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  onClick={() => onTabChange(tab)}
                  className={`
                    relative px-6 py-3 rounded-[24px] font-medium text-sm transition-all duration-200
                    ${
                      activeTab === tab
                        ? "text-neutral-900"
                        : "text-neutral-700 hover:text-neutral-900"
                    }
                  `}
                  style={{
                    transform: "rotate(180deg)",
                    textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                  }}
                  aria-label={tab}
                  aria-current={activeTab === tab ? "page" : undefined}
                  type="button"
                >
                  <span
                    className="absolute inset-0 rounded-[24px]"
                    style={{
                      background:
                        activeTab === tab
                          ? "transparent"
                          : "rgba(255, 255, 255, 0.1)",
                      transition: "background 200ms ease-out",
                    }}
                  />
                  <span className="relative z-10 pill-vertical-text">
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  /* HORIZONTAL */
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="horizontal"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1"
      >
        <div className="relative inline-flex gap-2 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 p-1.5 shadow-sm">
          <motion.div
            className="absolute top-1.5 bottom-1.5 rounded-full pointer-events-none overflow-hidden"
            initial={false}
            animate={{
              left: indicatorStyle.left + 6,
              width: indicatorStyle.width,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
              mass: 0.8,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.18) 100%)",
                backdropFilter: "blur(8px)",
                boxShadow:
                  "inset 0 1px 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px -2px rgba(6, 182, 212, 0.3)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(20, 184, 166, 0.12) 50%, rgba(14, 165, 233, 0.15) 100%)",
                opacity: 0.6,
                filter: "blur(1px)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-[50%]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: "9999px 9999px 0 0",
              }}
            />
          </motion.div>

          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => onTabChange(tab)}
              className={`
                relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 whitespace-nowrap z-10
                ${
                  activeTab === tab
                    ? "text-neutral-900"
                    : "text-neutral-700 hover:text-neutral-900"
                }
              `}
              style={{
                textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
              }}
              aria-label={tab}
              aria-current={activeTab === tab ? "page" : undefined}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =======================
   PAGE
======================= */
export default function PortfolioPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeTab, setActiveTab] = useState("All Project");
  const [activeSort, setActiveSort] = useState("Featured");
  const [showHorizontalNav, setShowHorizontalNav] = useState(false);
  const [allowVerticalNav, setAllowVerticalNav] = useState(false);

  const filterBarRef = useRef(null);
  const lastVisibilityRef = useRef(0);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", (e) => {
      const y = e?.scroll || 0;
      setScrollY(y);
      setIsScrolled(y > 50);

      const gate = window.innerHeight - 120;
      setAllowVerticalNav(y > gate);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (!filterBarRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visibilityRatio = entry.intersectionRatio;

          if (visibilityRatio >= 0.3) {
            if (!showHorizontalNav) setShowHorizontalNav(true);
          } else if (visibilityRatio < 0.1) {
            if (showHorizontalNav) setShowHorizontalNav(false);
          }

          lastVisibilityRef.current = visibilityRatio;
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "0px",
      },
    );

    observer.observe(filterBarRef.current);
    return () => observer.disconnect();
  }, [showHorizontalNav]);

  // Sort
  const sortedProjects = useMemo(() => {
    const copy = [...ALL_PROJECTS];
    copy.sort((a, b) => {
      if (activeSort === "Latest") {
        return b.id.localeCompare(a.id);
      }
      return 0;
    });
    return copy;
  }, [activeSort]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-['Montserrat']">
      {/* Hero */}
      <PortfolioHero scrollY={scrollY} />

      {/* Desktop: Vertical Navigation */}
      <div className="hidden lg:block">
        {allowVerticalNav && !showHorizontalNav && (
          <CategoryNavigation
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="vertical"
          />
        )}
      </div>

      {/* Mobile: Horizontal tabs sticky */}
      <div className="lg:hidden sticky top-[70px] z-40 backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative flex gap-2 py-3 overflow-x-auto no-scrollbar">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap
                  ${
                    activeTab === tab
                      ? "text-neutral-900 bg-white/60 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-white/40"
                  }
                `}
                style={{
                  textShadow:
                    activeTab === tab
                      ? "0 1px 2px rgba(255, 255, 255, 0.8)"
                      : "none",
                }}
                aria-label={tab}
                aria-current={activeTab === tab ? "page" : undefined}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area with Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Desktop filter row */}
        <div
          ref={filterBarRef}
          className="hidden lg:flex items-center justify-between gap-8 pb-8"
        >
          {showHorizontalNav && (
            <CategoryNavigation
              tabs={TABS}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              variant="horizontal"
            />
          )}

          {!showHorizontalNav && <div className="flex-1" />}

          <div className="flex-shrink-0">
            <SortToggle activeSort={activeSort} onSortChange={setActiveSort} />
          </div>
        </div>

        {/* Mobile sort toggle */}
        <div className="lg:hidden flex justify-center sm:justify-end pb-8">
          <SortToggle activeSort={activeSort} onSortChange={setActiveSort} />
        </div>
      </div>

      {/* Bento Grid */}
      <BentoGrid projects={sortedProjects} activeTab={activeTab} />
    </div>
  );
>>>>>>> 5053584c017e09ab95b78f807d549a2b8257f986
}
