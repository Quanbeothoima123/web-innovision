"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Construction, Cpu, Factory, Radar } from "lucide-react";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Data & Device Discovery",
    desc: "Map production lines, sensors, PLC data streams, and inspection workflows.",
    icon: Radar,
  },
  {
    phase: "Phase 02",
    title: "Pilot Deployment",
    desc: "Run a controlled AI pilot for defect detection and anomaly monitoring.",
    icon: Cpu,
  },
  {
    phase: "Phase 03",
    title: "Factory Scale-up",
    desc: "Roll out MLOps-ready pipelines across lines with measurable OEE impact.",
    icon: Factory,
  },
];

export default function IndustrialAIDetail() {
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
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f7fcff_32%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(circle_at_84%_12%,rgba(56,189,248,0.12),transparent_58%)]" />

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
              <Construction className="h-3.5 w-3.5" />
              Industrial AI & Automation
            </p>

            <h1 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[44px]">
              Industrial AI Suite
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We are finalizing modules for automated inspection, predictive
              maintenance, and real-time factory optimization.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-900">
            <Image
              src="/solutions/banner/comming_soon.webp"
              alt="Industrial AI & Automation"
              width={1280}
              height={860}
              priority
              className="h-[320px] w-full object-cover opacity-85 sm:h-[360px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 text-slate-900 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Roadmap Status
              </p>
              <p className="mt-1 text-lg font-semibold">Pilot onboarding Q2</p>
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
            Product Roadmap
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            We are building this solution with a deployment-first approach to
            ensure speed, reliability, and measurable production impact.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {roadmap.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    {item.phase}
                  </p>
                  <div className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-cyan-600">
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
        <div className="rounded-[30px] border border-cyan-200 bg-[linear-gradient(140deg,#f3fcff_0%,#eaf8ff_100%)] p-6 text-center shadow-[0_16px_45px_rgba(14,165,233,0.12)] sm:p-8">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[28px]">
            Want early access to the pilot program?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Share your factory context and objectives. We will contact you when
            pilot slots open.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
            >
              Join Waitlist
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400"
            >
              Explore Other Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
