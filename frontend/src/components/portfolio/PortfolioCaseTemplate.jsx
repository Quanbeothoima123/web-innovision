"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, X } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function toLines(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v.filter(Boolean);
  return String(v)
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);
}

function MetricIcons({ icons = [] }) {
  const map = {
    mail: "@",
    facebook: "f",
    linkedin: "in",
    web: "www",
  };

  if (!icons.length) return null;

  return (
    <div className="flex items-center gap-2 text-white/90">
      {icons.map((k, i) => (
        <span
          key={`${k}-${i}`}
          className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-2 text-[11px] font-bold uppercase tracking-[0.08em]"
        >
          {map[k] || k}
        </span>
      ))}
    </div>
  );
}

function MetricCard({ value, label, description, icons = [], showTrend = false }) {
  return (
    <article className="rounded-2xl border border-white/20 bg-white/12 p-5 backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div>
          {icons.length ? (
            <MetricIcons icons={icons} />
          ) : (
            <div className="text-3xl font-bold tracking-[-0.02em] text-white">
              {value}
            </div>
          )}
          <p className="mt-3 text-sm font-semibold text-white/95">{label}</p>
        </div>
        {showTrend ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/12 text-white">
            <TrendingUp className="h-4 w-4" />
          </span>
        ) : null}
      </div>
      {description ? (
        <p className="mt-2 text-xs leading-6 text-white/75">{description}</p>
      ) : null}
    </article>
  );
}

function SplitIO({ title, input, system, output, image, alt = "Preview", imageSide = "right" }) {
  const systemLines = toLines(system);
  const imageFirst = imageSide === "left";

  return (
    <section className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div className={cn(imageFirst ? "lg:order-1" : "lg:order-2")}>
        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
          <div className="relative aspect-[16/10] w-full">
            <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </div>

      <div className={cn("rounded-[24px] border border-slate-200 bg-white p-5", imageFirst ? "lg:order-2" : "lg:order-1")}>
        {title ? (
          <h3 className="text-xl font-semibold tracking-[-0.01em] text-slate-900">
            {title}
          </h3>
        ) : null}

        <div className="mt-4 space-y-4 text-sm text-slate-700">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Input</p>
            <p className="mt-1 leading-7">{input || "-"}</p>
          </div>

          <div className="h-px bg-slate-100" />

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">System</p>
            {systemLines.length ? (
              <ul className="mt-1 space-y-2">
                {systemLines.map((line) => (
                  <li key={line} className="flex gap-2 leading-7">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 leading-7">-</p>
            )}
          </div>

          <div className="h-px bg-slate-100" />

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Output</p>
            <p className="mt-1 leading-7 whitespace-pre-line">{output || "-"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageBlock({ title, subtitle, image, alt = "Preview" }) {
  return (
    <section className="space-y-4">
      {title ? (
        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
          {title}
        </h3>
      ) : null}
      {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}

      <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
        <div className="relative aspect-[16/9] w-full">
          <Image src={image} alt={alt} fill className="object-cover" sizes="100vw" />
        </div>
      </div>
    </section>
  );
}

function ExpandedModal({ image, caption, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/65"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-hidden rounded-3xl border border-white/20 bg-black">
          <div className="relative h-[70vh] w-full">
            <Image src={image} alt={caption || "Preview"} fill className="object-contain" sizes="100vw" />
          </div>
        </div>

        {caption ? <p className="mt-3 text-center text-sm text-white/85">{caption}</p> : null}
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioCaseTemplate({
  title,
  subtitle,
  problem,
  solution,
  primaryImage,
  secondaryImage,
  mockImage,
  captions = [],
  metricsTop = [],
  metricsBottom = [],
  preMetricsBlocks = [],
}) {
  const [expandedImage, setExpandedImage] = useState(null);
  const reduceMotion = useReducedMotion();

  const problemLines = Array.isArray(problem) ? problem : null;
  const solutionLines = Array.isArray(solution) ? solution : null;

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.58, ease: "easeOut" },
      };

  const allCaptions = useMemo(() => [captions[0] || "", captions[1] || ""], [captions]);

  return (
    <>
      <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f8fcff_35%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_16%_0%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_86%_10%,rgba(56,189,248,0.12),transparent_56%)]" />

        <motion.section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" {...sectionAnim}>
          <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Link>

                <h1 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[44px]">
                  {title}
                </h1>

                {subtitle ? (
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{subtitle}</p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[primaryImage, secondaryImage].map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => setExpandedImage({ image: img, caption: allCaptions[index] })}
                    className="group overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 text-left"
                  >
                    <div className="relative h-48 w-full sm:h-44 lg:h-48">
                      <Image src={img} alt={allCaptions[index] || title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width:1280px) 26vw, (min-width:640px) 44vw, 100vw" />
                    </div>
                    {allCaptions[index] ? (
                      <p className="border-t border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
                        {allCaptions[index]}
                      </p>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[24px] border border-slate-200 bg-white p-5">
                <h2 className="text-base font-semibold uppercase tracking-[0.12em] text-slate-800">Problem</h2>
                {problemLines ? (
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {problemLines.map((line) => (
                      <li key={line} className="flex gap-2 leading-7">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-7 text-slate-600">{problem}</p>
                )}
              </article>

              <article className="rounded-[24px] border border-slate-200 bg-white p-5">
                <h2 className="text-base font-semibold uppercase tracking-[0.12em] text-slate-800">Solution</h2>
                {solutionLines ? (
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {solutionLines.map((line) => (
                      <li key={line} className="flex gap-2 leading-7">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-7 text-slate-600">{solution}</p>
                )}

                {mockImage ? (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <div className="relative aspect-[16/9] w-full">
                      <Image src={mockImage} alt="Mock" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
                    </div>
                  </div>
                ) : null}
              </article>
            </div>
          </div>
        </motion.section>

        {preMetricsBlocks.length ? (
          <motion.section className="relative mx-auto mt-10 max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8" {...sectionAnim}>
            {preMetricsBlocks.map((block, idx) => {
              if (block?.type === "image") {
                return (
                  <ImageBlock
                    key={`image-${idx}`}
                    title={block.title}
                    subtitle={block.subtitle}
                    image={block.image}
                    alt={block.alt}
                  />
                );
              }

              return (
                <SplitIO
                  key={`split-${idx}`}
                  title={block.title}
                  input={block.input}
                  system={block.system}
                  output={block.output}
                  image={block.image}
                  alt={block.alt}
                  imageSide={block.imageSide || "right"}
                />
              );
            })}
          </motion.section>
        ) : null}

        <motion.section className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8" {...sectionAnim}>
          <div className="rounded-[30px] bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-600 p-6 shadow-[0_20px_60px_rgba(2,132,199,0.28)] sm:p-8">
            <div
              className={cn(
                "grid gap-4",
                metricsTop.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
              )}
            >
              {metricsTop.map((m, i) => (
                <MetricCard
                  key={`${m.label}-${i}`}
                  value={m.value}
                  label={m.label}
                  description={m.description}
                  icons={m.icons || []}
                  showTrend={m.showTrend ?? false}
                />
              ))}
            </div>

            {metricsBottom.length ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {metricsBottom.map((m, i) => (
                  <MetricCard
                    key={`${m.label}-${i}`}
                    value={m.value}
                    label={m.label}
                    description={m.description}
                    icons={m.icons || []}
                    showTrend={m.showTrend ?? false}
                  />
                ))}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
              >
                Start Similar Project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-white/40 bg-white/10 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/20"
              >
                More Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      <AnimatePresence>
        {expandedImage ? (
          <ExpandedModal
            image={expandedImage.image}
            caption={expandedImage.caption}
            onClose={() => setExpandedImage(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
