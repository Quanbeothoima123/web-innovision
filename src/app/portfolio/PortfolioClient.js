"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Clock, Star } from "lucide-react";
import Link from "next/link";

/**
 * FILE: src/app/portfolio/PortfolioClient.js
 * Client Component - handles interactive UI
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
      "Scalable web infrastructure handling 1,000+ concurrent users with real-time data synchronization",
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
      "LLM-powered document intelligence system that revolutionizes government archive management with secure, lightning-fast search and retrieval capabilities",
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
      "AI-powered content generation platform helping marketing teams create high-quality campaigns faster",
    tags: ["GPT-4", "Content Gen", "Marketing"],
    category: "AI Products",
    image: "/portfolio/banner/marketing_content_assistant.png",
    route: "/portfolio/marketing-content-assistant-2",
  },
];

/* =======================
   STRUCTURED DATA (JSON-LD)
======================= */
const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "INNOVISION Projects Portfolio",
  description:
    "Portfolio of AI-driven solutions and software development projects",
  url: "https://innovision.com/portfolio",
  publisher: {
    "@type": "Organization",
    name: "INNOVISION Corporation",
    logo: {
      "@type": "ImageObject",
      url: "https://innovision.com/logo.png",
    },
  },
  hasPart: ALL_PROJECTS.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: `https://innovision.com${project.image}`,
    keywords: project.tags.join(", "),
  })),
});

/* =======================
   HERO
======================= */
function PortfolioHero({ scrollY }) {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Background image + parallax */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner-portfolio.png')",
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
        role="img"
        aria-label="Portfolio banner background"
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
    </header>
  );
}

/* =======================
   CARDS
======================= */
function ProjectCard({ title, metric, summary, tags, image, index, route }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
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
      {/* Glass Card - Trắng sạch như About Us */}
      <motion.div
        className="relative h-full rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white"
        whileHover={{
          y: -8,
          boxShadow: "0 24px 48px rgba(60, 144, 252, 0.12)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Hover Glow - Xanh #3c90fc */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#3c90fc]/5 via-[#3c90fc]/3 to-white/40"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={`${title} project screenshot`}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="relative p-5">
          {/* Metric Badge - Xanh #3c90fc */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3c90fc]/10 border border-[#3c90fc]/20 mb-3">
            <div
              className="w-1.5 h-1.5 rounded-full bg-[#3c90fc]"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-[#3c90fc]">
              {metric}
            </span>
          </div>

          <h3 className="font-bold text-black mb-2 text-xl">{title}</h3>

          <p className="text-[#474363] leading-relaxed mb-3 text-sm line-clamp-3">
            {summary}
          </p>

          <div
            className="flex flex-wrap gap-2 mb-3"
            role="list"
            aria-label="Project tags"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-[#474363]"
                role="listitem"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href={route} aria-label={`Learn more about ${title}`}>
            <motion.button
              className="inline-flex items-center gap-2 text-[#3c90fc] font-semibold text-sm group/cta"
              whileHover={{ x: 4 }}
              type="button"
            >
              <span>Learn more</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight
                  className="w-4 h-4"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </motion.div>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.article>
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
      role="article"
      aria-label="Coming soon project placeholder"
    >
      <div className="h-full rounded-3xl border border-dashed border-gray-200 shadow-sm overflow-hidden bg-white">
        <div className="h-full flex flex-col items-center justify-center p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-[#3c90fc]/10 flex items-center justify-center mb-4">
            <Sparkles
              className="w-8 h-8 text-[#3c90fc]/50"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
          <h4 className="text-lg font-semibold text-gray-400 mb-2">
            Coming Soon
          </h4>
          <p className="text-sm text-gray-400">New project in development</p>
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
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Project gallery"
    >
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
    </section>
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
    <nav
      className="flex items-center gap-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-100 p-1.5 shadow-sm"
      aria-label="Sort options"
    >
      {sortOptions.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => onSortChange(label)}
          className={`
            relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
            ${activeSort === label ? "bg-[#3c90fc] text-white" : "text-[#474363] hover:text-black"}
          `}
          type="button"
          aria-label={`Sort by ${label}`}
          aria-pressed={activeSort === label}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Icon className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            {label}
          </span>
        </button>
      ))}
    </nav>
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
        <motion.nav
          key="vertical"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed left-8 top-24 bottom-24 z-30 flex items-center"
          aria-label="Project categories"
        >
          <div className="relative flex flex-col gap-2">
            {/* Outer Rail */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 bg-white/80 backdrop-blur-[14px]"
                style={{
                  boxShadow:
                    "inset 0 1px 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.08)",
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
              {/* Active Capsule - Solid Blue */}
              <motion.div
                className="absolute left-2 right-2 rounded-[24px] bg-[#3c90fc] pointer-events-none"
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
              />

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
                        ? "text-white"
                        : "text-[#474363] hover:text-black"
                    }
                  `}
                  style={{
                    transform: "rotate(180deg)",
                  }}
                  aria-label={tab}
                  aria-current={activeTab === tab ? "page" : undefined}
                  type="button"
                >
                  <span className="relative z-10 pill-vertical-text">
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
    );
  }

  /* HORIZONTAL */
  return (
    <AnimatePresence mode="wait">
      <motion.nav
        key="horizontal"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1"
        aria-label="Project categories"
      >
        <div className="relative inline-flex gap-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-100 p-1.5 shadow-sm">
          <motion.div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-[#3c90fc] pointer-events-none"
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
          />

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
                    ? "text-white"
                    : "text-[#474363] hover:text-black"
                }
              `}
              aria-label={tab}
              aria-current={activeTab === tab ? "page" : undefined}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

/* =======================
   MAIN CLIENT COMPONENT
======================= */
export default function PortfolioClient() {
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
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData()),
        }}
      />

      <main className="min-h-screen bg-white overflow-x-hidden font-['Montserrat']">
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
        <div className="lg:hidden sticky top-[70px] z-40 backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex gap-2 py-3 overflow-x-auto no-scrollbar"
              aria-label="Project categories"
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap
                    ${
                      activeTab === tab
                        ? "text-white bg-[#3c90fc] shadow-md"
                        : "text-[#474363] hover:text-black hover:bg-white/40"
                    }
                  `}
                  aria-label={tab}
                  aria-current={activeTab === tab ? "page" : undefined}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </nav>
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
              <SortToggle
                activeSort={activeSort}
                onSortChange={setActiveSort}
              />
            </div>
          </div>

          {/* Mobile sort toggle */}
          <div className="lg:hidden flex justify-center sm:justify-end pb-8">
            <SortToggle activeSort={activeSort} onSortChange={setActiveSort} />
          </div>
        </div>

        {/* Bento Grid */}
        <BentoGrid projects={sortedProjects} activeTab={activeTab} />
      </main>
    </>
  );
}
