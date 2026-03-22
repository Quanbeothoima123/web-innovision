"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Cpu,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const storyMilestones = [
  {
    year: "2021",
    title: "Engineering-First Foundation",
    desc: "INNOVISION started as a hands-on engineering team focused on real deployments, not lab-only demos.",
  },
  {
    year: "2023",
    title: "Enterprise AI Delivery",
    desc: "We expanded into AI, LLM, and edge pipelines for manufacturing, enterprise support, and public-sector use cases.",
  },
  {
    year: "Now",
    title: "Regional Growth",
    desc: "Today we help teams across Southeast Asia launch secure, production-ready AI systems with measurable outcomes.",
  },
];

const values = [
  {
    icon: Rocket,
    title: "Execution Over Hype",
    desc: "We prioritize shipping reliable systems that teams can actually operate and scale.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety by Design",
    desc: "Security, governance, and data boundaries are built into every phase of delivery.",
  },
  {
    icon: BrainCircuit,
    title: "Applied Intelligence",
    desc: "Our AI approach is practical: measurable impact, fast feedback loops, and clear ownership.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    desc: "We work as an extension of your team, with transparent communication from kickoff to handover.",
  },
];

const highlights = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Industry Domains", value: "12+" },
  { label: "Delivery Success", value: "98%" },
  { label: "Support Window", value: "24/7" },
];

const capabilities = [
  "AI Product Engineering",
  "LLM & Retrieval Systems",
  "Edge AI for Real-time Inference",
  "Firmware + Cloud Integration",
];

export default function AboutUsClient() {
  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#e8f7ff_0%,#f7fbff_45%,#ffffff_100%)] pb-20 pt-24 text-slate-900 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[460px] bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.25),transparent_60%),radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.18),transparent_58%)]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
              <Sparkles className="h-3.5 w-3.5" />
              About INNOVISION
            </span>

            <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Building Practical AI Systems
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                That Teams Can Trust
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We design and deploy enterprise AI solutions across AI, LLM, and
              edge computing. Our focus is simple: faster execution, stable
              architecture, and business outcomes you can measure.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/solutions"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3"
                >
                  <p className="text-2xl font-bold tracking-[-0.02em] text-slate-900">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative grid gap-4">
            <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-slate-900">
              <Image
                src="/banner-aboutus.webp"
                alt="INNOVISION team and solutions"
                width={1200}
                height={800}
                className="h-[300px] w-full object-cover opacity-85 sm:h-[360px]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-900/50 to-transparent p-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Mission
                </p>
                <p className="mt-1 text-lg font-semibold leading-snug">
                  Transform complex AI into deployable systems for real business
                  operations.
                </p>
              </div>
            </div>

            <div className="grid gap-3 rounded-[24px] border border-slate-200/80 bg-white p-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Our Story
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] sm:text-[34px]">
                From Technical Craft to Regional Impact
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              We combine software engineering discipline with AI innovation to
              help organizations move from idea to production confidently.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {storyMilestones.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
              How We Operate
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] sm:text-[34px]">
              Clear Process, Shared Ownership
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Every engagement follows a transparent execution model so your
              team has visibility from technical planning to launch and
              optimization.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              {
                icon: Building2,
                title: "Strategic Discovery",
                desc: "Define outcomes, map constraints, and align solution architecture.",
              },
              {
                icon: Cpu,
                title: "Production Build",
                desc: "Implement AI workflows with integration, testing, and observability.",
              },
              {
                icon: ArrowRight,
                title: "Scale & Handover",
                desc: "Roll out safely, train teams, and improve continuously with real metrics.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-cyan-200/70 bg-[linear-gradient(130deg,#f3fcff_0%,#e6f7ff_50%,#f9fdff_100%)] px-6 py-10 text-center shadow-[0_20px_50px_rgba(14,165,233,0.12)] sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Let&apos;s Build Together
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[36px]">
            Ready to turn your AI roadmap into production outcomes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Partner with INNOVISION to design, deliver, and scale AI systems
            that support real operations and long-term growth.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/solutions"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
