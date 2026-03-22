"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cpu, Layers, Sparkles } from "lucide-react";
import { solutionsSeed } from "@/lib/contentSeed";

const iconMap = {
  Sparkles,
  Cpu,
  Layers,
};

const getStructuredData = (solutionsData) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "INNOVISION Solutions",
  description:
    "Comprehensive AI and technology solutions offered by INNOVISION Corporation",
  url: "https://innovision.com/solutions",
  numberOfItems: solutionsData.length,
  itemListElement: solutionsData.map((solution, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: solution.title,
      description: solution.desc,
      image: `https://innovision.com${solution.image}`,
      url: `https://innovision.com${solution.route}`,
      provider: {
        "@type": "Organization",
        name: "INNOVISION Corporation",
      },
      areaServed: {
        "@type": "Place",
        name: "Global",
      },
      serviceType: solution.category,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    },
  })),
});

const getBreadcrumbData = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://innovision.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://innovision.com/solutions",
    },
  ],
});

const getFAQData = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI solutions does INNOVISION offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INNOVISION offers AI Products, Industrial AI & Automation, and Software & Firmware Development services for enterprise deployments.",
      },
    },
    {
      "@type": "Question",
      name: "What industries can benefit from INNOVISION's AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our solutions serve manufacturing, real estate, fintech, government, and other domains that require practical AI integration.",
      },
    },
    {
      "@type": "Question",
      name: "Does INNOVISION provide custom software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide custom software engineering and firmware development including cloud integration and embedded systems.",
      },
    },
  ],
});

export default function SolutionsClient({ initialSolutions = solutionsSeed }) {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(2);
  const solutionsData = initialSolutions;

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.62, ease: "easeOut" },
      };

  const cardAnim = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.52, delay, ease: "easeOut" },
        };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(solutionsData)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbData()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQData()) }}
      />

      <div className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f7fcff_30%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(circle_at_18%_0%,rgba(14,165,233,0.2),transparent_58%),radial-gradient(circle_at_82%_10%,rgba(34,211,238,0.16),transparent_56%)]" />

        <motion.section
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          {...sectionAnim}
        >
          <div className="grid gap-8 rounded-[34px] border border-white/80 bg-white/86 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.10)] backdrop-blur lg:grid-cols-[1.06fr_0.94fr] lg:p-10">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                <Sparkles className="h-3.5 w-3.5" />
                Solution Portfolio
              </p>
              <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-5xl">
                Solutions Built for
                <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                  Real-World Execution
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                From AI products to industrial automation and embedded software,
                we design systems that are reliable in production and measurable
                in business impact.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
                >
                  View Case Studies
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-300"
                >
                  About Our Team
                </Link>
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-900"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <Image
                src="/banner-solutions.webp"
                alt="INNOVISION solutions overview"
                width={1280}
                height={860}
                className="h-[320px] w-full object-cover opacity-85 sm:h-[360px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Delivery Focus
                </p>
                <p className="mt-1 text-lg font-semibold">
                  AI - LLM - Edge Computing - Firmware
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.main
          className="relative mx-auto mt-12 max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8"
          {...sectionAnim}
        >
          {solutionsData.slice(0, visibleCount).map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.article
                key={item.title}
                className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white p-5 shadow-[0_22px_60px_rgba(15,23,42,0.10)] md:p-7"
                itemScope
                itemType="https://schema.org/Service"
                {...cardAnim(index * 0.08)}
              >
                <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-100/80 blur-3xl" />

                <div
                  className={`grid gap-6 ${index % 2 === 1 ? "md:grid-cols-[1.02fr_0.98fr]" : "md:grid-cols-[0.98fr_1.02fr]"}`}
                >
                  <motion.div
                    className={index % 2 === 1 ? "md:order-2" : ""}
                    whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                  >
                    <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={`${item.title} - ${item.desc}`}
                        width={1100}
                        height={750}
                        className="h-[280px] w-full object-cover md:h-[360px]"
                        priority={index === 0}
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`inline-flex rounded-full bg-gradient-to-r ${item.accent} px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h2
                      className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[34px]"
                      itemProp="name"
                    >
                      {item.title}
                    </h2>

                    <p
                      className="mt-3 max-w-xl text-sm leading-7 text-slate-600"
                      itemProp="description"
                    >
                      {item.desc}
                    </p>

                    <div className="mt-5 grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:grid-cols-2">
                      {item.features.map((feature) => (
                        <div
                          key={feature}
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
                        {item.metric}
                      </span>
                      <Link
                        href={item.route}
                        aria-label={`Learn more about ${item.title}`}
                        itemProp="url"
                        className="group inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
          {visibleCount < solutionsData.length ? (
            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((count) =>
                    Math.min(count + 2, solutionsData.length),
                  )
                }
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Watch More
              </button>
            </div>
          ) : null}
        </motion.main>
      </div>
    </>
  );
}
