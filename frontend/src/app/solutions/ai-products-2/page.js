"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  FileSearch,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

const architectureSteps = [
  {
    title: "Data Ingestion",
    desc: "Collect PDFs, SOPs, contracts, and internal records with secure connectors.",
    icon: Database,
  },
  {
    title: "Document Intelligence",
    desc: "OCR + structure extraction for text, tables, entities, and metadata.",
    icon: FileSearch,
  },
  {
    title: "RAG + Domain LLM",
    desc: "Grounded responses with retrieval pipelines and domain-specific prompt controls.",
    icon: Bot,
  },
  {
    title: "Application Layer",
    desc: "Expose assistants through chat UI and API with observability and governance.",
    icon: MessageSquareText,
  },
];

const useCases = [
  "Internal knowledge assistants for enterprise teams",
  "Document Q&A for legal and compliance operations",
  "Government archive retrieval and summarization",
  "Finance verification workflows with traceable outputs",
];

export default function AIProductsDetail() {
  const reduceMotion = useReducedMotion();

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f6fbff_35%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_18%_0%,rgba(14,165,233,0.2),transparent_60%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.14),transparent_58%)]" />

      <motion.section
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="grid gap-7 rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.10)] backdrop-blur lg:grid-cols-[1.04fr_0.96fr] lg:p-10">
          <div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Solutions
            </Link>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
              <Sparkles className="h-3.5 w-3.5" />
              AI Products
            </p>

            <h1 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[44px]">
              Enterprise AI Assistants
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                Grounded by Your Data
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We build AI products that automate analysis, Q&A, and decision
              support with domain-tuned models, retrieval pipelines, and secure
              deployment options.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-900">
            <Image
              src="/solutions/banner/solution1.webp"
              alt="AI Products"
              width={1280}
              height={860}
              priority
              className="h-[320px] w-full object-cover opacity-85 sm:h-[360px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 text-slate-900 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Delivery Metric
              </p>
              <p className="mt-1 text-lg font-semibold">95%+ answer relevance</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[30px]">
            Architecture Overview
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            A practical AI stack from document ingestion to production-ready
            assistant interfaces.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {architectureSteps.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-cyan-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900 sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="grid gap-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr] sm:p-8">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[30px]">
              Common Use Cases
            </h2>
            <ul className="mt-5 space-y-3">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-[linear-gradient(140deg,#f2fcff_0%,#e9f8ff_100%)] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
              Engagement Model
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Fast pilot, safe rollout, measurable outcomes
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Start with a scoped pilot in 4-6 weeks, validate KPIs, then scale
              to production with governance and monitoring.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
              >
                Start Pilot
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400"
              >
                See Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
