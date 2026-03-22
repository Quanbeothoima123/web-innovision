"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, Grid3X3, Sparkles, Star } from "lucide-react";
import { portfolioSeed } from "@/lib/contentSeed";

const TABS = [
  "All Project",
  "AI Products",
  "Industrial AI & Automation",
  "Software & Firmware Development",
];

const getStructuredData = (projects) => ({
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
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: `https://innovision.com${project.image}`,
    keywords: project.tags.join(", "),
  })),
});

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PortfolioClient({ initialProjects = portfolioSeed }) {
  const [activeTab, setActiveTab] = useState("All Project");
  const [activeSort, setActiveSort] = useState("Featured");
  const [visibleCount, setVisibleCount] = useState(3);
  const reduceMotion = useReducedMotion();
  const allProjects = initialProjects;

  const sortOptions = ["Featured", "Latest"];

  const filteredAndSorted = useMemo(() => {
    let projects =
      activeTab === "All Project"
        ? [...allProjects]
        : allProjects.filter((p) => p.category === activeTab);

    if (activeSort === "Latest") {
      projects = projects.sort((a, b) => Number(b.sortOrder || 0) - Number(a.sortOrder || 0));
    }

    return projects;
  }, [activeTab, activeSort, allProjects]);
  const heroSpotlight = allProjects[0] || portfolioSeed[0];

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.62, ease: "easeOut" },
      };

  return (
    <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(allProjects)) }}
      />

      <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f7fcff_35%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[430px] bg-[radial-gradient(circle_at_16%_0%,rgba(14,165,233,0.2),transparent_58%),radial-gradient(circle_at_86%_10%,rgba(56,189,248,0.14),transparent_56%)]" />

        <motion.section
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          {...sectionAnim}
        >
          <div className="grid gap-8 rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_26px_65px_rgba(15,23,42,0.10)] backdrop-blur lg:grid-cols-[1.04fr_0.96fr] lg:p-10">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                <Sparkles className="h-3.5 w-3.5" />
                Project Portfolio
              </p>

              <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-5xl">
                Case Studies Built for
                <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                  Real Business Outcomes
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore how INNOVISION delivers AI, LLM, edge, and software
                systems that are measurable, scalable, and production-ready.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/solutions"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-300"
                >
                  About Our Team
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <article className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100">
                <Image
                  src={heroSpotlight.image}
                  alt={heroSpotlight.title}
                  width={1200}
                  height={760}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                    Spotlight Case
                  </p>
                  <h3 className="mt-1 text-base font-semibold leading-tight">
                    {heroSpotlight.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/80">{heroSpotlight.metric}</p>
                </div>
              </article>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "12+", label: "Industries Served" },
                  { value: "98%", label: "On-time Delivery" },
                  { value: "24/7", label: "Technical Support" },
                ].map((item) => (
                  <article
                    key={item.label}
                    className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3"
                  >
                    <p className="text-xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
          {...sectionAnim}
        >
          <div className="flex flex-col gap-3 rounded-[26px] border border-slate-200/75 bg-white/90 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.07)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <nav
              className="flex flex-wrap gap-2"
              aria-label="Project categories"
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setVisibleCount(3);
                  }}
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-full border px-4 text-[11px] font-semibold uppercase tracking-[0.12em] transition",
                    activeTab === tab
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900",
                  )}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1.5">
              {sortOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setActiveSort(opt);
                    setVisibleCount(3);
                  }}
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition",
                    activeSort === opt
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900",
                  )}
                  type="button"
                >
                  {opt === "Featured" ? (
                    <Star className="h-3.5 w-3.5" />
                  ) : (
                    <Calendar className="h-3.5 w-3.5" />
                  )}
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="relative mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeSort}`}
              initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredAndSorted.length > 0 ? (
                filteredAndSorted.slice(0, visibleCount).map((project, index) => (
                  <motion.article
                    key={project.slug || project.title}
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: reduceMotion ? 0 : index * 0.05,
                      ease: "easeOut",
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative overflow-hidden border-b border-slate-200/70 bg-slate-100">
                      <Image
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        width={1200}
                        height={760}
                        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width:1280px) 30vw, (min-width:768px) 46vw, 100vw"
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                      <span className="absolute bottom-3 left-3 inline-flex rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 backdrop-blur">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
                        <Grid3X3 className="h-3.5 w-3.5" />
                        {project.metric}
                      </div>

                      <h3
                        className="mt-3 text-xl font-semibold leading-tight tracking-[-0.01em] text-slate-900"
                        itemProp="name"
                      >
                        {project.title}
                      </h3>

                      <p
                        className="mt-2 text-sm leading-7 text-slate-600"
                        itemProp="description"
                      >
                        {project.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-5">
                        <Link
                          href={project.route}
                          itemProp="url"
                          aria-label={`Learn more about ${project.title}`}
                          className="group/btn inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
                        >
                          View Case Study
                          <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full rounded-[28px] border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500">
                  No projects found for this category yet.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          {filteredAndSorted.length > visibleCount ? (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((count) =>
                    Math.min(count + 3, filteredAndSorted.length),
                  )
                }
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Watch More
              </button>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}
