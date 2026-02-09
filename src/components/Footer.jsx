"use client";

import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { name: "About Innovision", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
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
      className="relative z-[10] bg-white pt-20 pb-10 border-t border-gray-100"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Structured data via Microdata */}
      <span className="sr-only" itemProp="name">
        Innovision
      </span>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* LOGO & CONTACT INFO */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              aria-label="Go to Innovision homepage"
              className="w-fit"
              itemProp="url"
            >
              <Image
                src="/logo.svg"
                alt="Innovision logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                priority={false}
                itemProp="logo"
              />
            </Link>

            {/* Address (semantic + SEO) */}
            <address className="not-italic flex flex-col gap-4 text-[#474363] text-[15px] leading-relaxed">
              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3c90fc] transition-colors"
                  aria-label="Open address in Google Maps"
                  title="Open address in Google Maps"
                >
                  <span itemProp="streetAddress">
                    Alley 62, Khuc Thua Du, Dich Vong Ward, Cau Giay District
                  </span>
                </a>
              </div>

              {/* ContactPoint */}
              <div
                itemProp="contactPoint"
                itemScope
                itemType="https://schema.org/ContactPoint"
                className="flex flex-col gap-4"
              >
                <span className="sr-only" itemProp="contactType">
                  customer support
                </span>

                <a
                  href="tel:+84886392913"
                  className="hover:text-[#3c90fc] transition-colors"
                  aria-label="Call Innovision: +84 88 639 2913"
                  title="Call Innovision"
                  itemProp="telephone"
                >
                  (+84) 88.639.2913
                </a>

                <a
                  href="mailto:support@innovision.com"
                  className="hover:text-[#3c90fc] transition-colors"
                  aria-label="Email Innovision support"
                  title="Email Innovision"
                  itemProp="email"
                >
                  support@innovision.com
                </a>
              </div>
            </address>
          </div>

          {/* COMPANY */}
          <div>
            <h2 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              Company
            </h2>
            <nav aria-label="Footer Company navigation">
              <ul className="flex flex-col gap-4">
                {companyLinks.map((item) => (
                  <li key={item.name} className="group w-fit">
                    <Link
                      href={item.href}
                      title={item.name}
                      className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h2 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              Solutions
            </h2>
            <nav aria-label="Footer Solutions navigation">
              <ul className="flex flex-col gap-4">
                {solutionLinks.map((item) => (
                  <li key={item.name} className="group w-fit">
                    <Link
                      href={item.href}
                      title={item.name}
                      className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* AI PRODUCTS */}
          <div>
            <h2 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              AI Products
            </h2>
            <nav aria-label="Footer AI Products navigation">
              <ul className="flex flex-col gap-4">
                {aiProductLinks.map((item) => (
                  <li key={item.name} className="group w-fit">
                    <Link
                      href={item.href}
                      title={item.name}
                      className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#474363] text-[14px]">
              © {year} Innovision. All rights reserved.
            </p>
            <nav
              aria-label="Legal navigation"
              className="flex items-center gap-6"
            >
              <Link
                href="/privacy"
                className="text-[#474363] text-[14px] hover:text-[#3c90fc] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#474363] text-[14px] hover:text-[#3c90fc] transition-colors"
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
