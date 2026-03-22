"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const companyLinks = [
  { name: "About Innovision", href: "/about-us" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blogs" },
];

const solutionLinks = [
  { name: "AI Products", href: "/solutions/ai-products-2" },
  { name: "Industrial AI & Automation", href: "/solutions/coming-soon" },
  {
    name: "Software & Firmware Development",
    href: "/solutions/software-firmware-development-2",
  },
];

const aiProductLinks = [
  {
    name: "Real Estate AI Assistant",
    href: "/portfolio/real-estate-ai-assistant",
  },
  {
    name: "Fintech Verification AI",
    href: "/portfolio/fintech-verification-ai",
  },
  {
    name: "Government Document AI",
    href: "/portfolio/government-document-ai-2",
  },
  {
    name: "Marketing Content Assistant",
    href: "/portfolio/marketing-content-assistant-2",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  const mapsQuery = encodeURIComponent(
    "Alley 62, Khuc Thua Du, Dich Vong Ward, Cau Giay District",
  );
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <footer
      className="relative z-[10] mt-16 border-t border-cyan-100/70 bg-[linear-gradient(180deg,#f8fdff_0%,#f2faff_40%,#ffffff_100%)] pt-12"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <span className="sr-only" itemProp="name">
        Innovision
      </span>

      <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                <Sparkles className="h-3.5 w-3.5" />
                Build With Innovision
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[34px]">
                Ready to launch your next AI solution?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                We help teams move from prototype to production with reliable
                AI, LLM, and edge computing systems.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 rounded-[30px] border border-cyan-100/70 bg-white/85 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" aria-label="Go to Innovision homepage" itemProp="url">
              <Image
                src="/logo.svg"
                alt="Innovision logo"
                width={170}
                height={42}
                className="h-10 w-auto object-contain"
                itemProp="logo"
              />
            </Link>

            <address className="not-italic space-y-3 text-sm leading-6 text-slate-600">
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition hover:text-cyan-700"
                aria-label="Open address in Google Maps"
                title="Open address in Google Maps"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-500" />
                <span itemProp="streetAddress">
                  Alley 62, Khuc Thua Du, Dich Vong Ward, Cau Giay District
                </span>
              </a>
              <a
                href="tel:+84886392913"
                className="inline-flex items-center gap-2 transition hover:text-cyan-700"
                itemProp="telephone"
              >
                <Phone className="h-4 w-4 text-cyan-500" />
                (+84) 88.639.2913
              </a>
              <a
                href="mailto:support@innovision.com"
                className="inline-flex items-center gap-2 transition hover:text-cyan-700"
                itemProp="email"
              >
                <Mail className="h-4 w-4 text-cyan-500" />
                support@innovision.com
              </a>
            </address>
          </div>

          <div>
            <h2 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-900">
              Company
            </h2>
            <nav aria-label="Footer Company navigation">
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      title={item.name}
                      className="text-sm text-slate-600 transition hover:text-cyan-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-900">
              Solutions
            </h2>
            <nav aria-label="Footer Solutions navigation">
              <ul className="space-y-3">
                {solutionLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      title={item.name}
                      className="text-sm text-slate-600 transition hover:text-cyan-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-900">
              AI Products
            </h2>
            <nav aria-label="Footer AI Products navigation">
              <ul className="space-y-3">
                {aiProductLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      title={item.name}
                      className="text-sm text-slate-600 transition hover:text-cyan-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-6 border-t border-cyan-100/80 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-slate-500">
              Copyright {year} Innovision. All rights reserved.
            </p>
            <nav aria-label="Legal navigation" className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-xs text-slate-500 transition hover:text-cyan-700"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-slate-500 transition hover:text-cyan-700"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
