"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    title: "Frontend Engineering",
    desc: "Modern React/Next.js interfaces with responsive UX and design-system consistency.",
    icon: Code2,
  },
  {
    title: "Backend & APIs",
    desc: "Scalable services with secure REST/gRPC APIs and integration-ready architecture.",
    icon: Database,
  },
  {
    title: "Embedded & Firmware",
    desc: "Low-level development for MCU/edge devices with robust runtime behavior.",
    icon: Cpu,
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, containerized delivery, and production observability.",
    icon: Cloud,
  },
];

const process = [
  "Discovery and technical alignment",
  "Architecture + sprint planning",
  "Iterative implementation and QA",
  "Deployment, handover, and optimization",
];

export default function SoftwareDevelopment() {
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
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f7fcff_34%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_18%_0%,rgba(14,165,233,0.2),transparent_60%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.12),transparent_58%)]" />

      <motion.section
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="grid gap-7 rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.10)] backdrop-blur lg:grid-cols-[1.03fr_0.97fr] lg:p-10">
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
              Software & Firmware
            </p>

            <h1 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[44px]">
              Software + Firmware Delivery
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                Built for Scale and Reliability
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              End-to-end product engineering from frontend and backend systems
              to embedded firmware and cloud operations.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-900">
            <Image
              src="/solutions/banner/solution3.webp"
              alt="Software and Firmware Development"
              width={1280}
              height={860}
              priority
              className="h-[320px] w-full object-cover opacity-85 sm:h-[360px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 text-slate-900 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Delivery Reliability
              </p>
              <p className="mt-1 text-lg font-semibold">99.9% uptime target</p>
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
            Core Capabilities
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => {
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
        <div className="grid gap-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[1.02fr_0.98fr] sm:p-8">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[30px]">
              Agile Delivery Process
            </h2>
            <ul className="mt-5 space-y-3">
              {process.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-[linear-gradient(140deg,#f3fcff_0%,#eaf8ff_100%)] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
              Engagement Format
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Sprint-based collaboration with transparent checkpoints
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Typical sprint cycles of 2-3 weeks, clear acceptance criteria,
              and regular demos to keep business and technical goals aligned.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
              >
                Discuss Requirements
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
