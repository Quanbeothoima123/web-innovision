"use client";

import Link from "next/link";

export function Footer() {
  const companyLinks = [
    { name: "About Innovision", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const solutionLinks = [
    { name: "AI Products", href: "/solutions/ai-products-2" },
    {
      name: "Industrial AI & Automation",
      href: "/solutions/coming-soon",
    },
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

  return (
    <footer className="relative z-[10] bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* LOGO & CONTACT INFO */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <img
                src="/logo.svg"
                alt="Innovision Logo"
                className="h-10 w-fit object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <div className="flex flex-col gap-4 text-[#474363] text-[15px] leading-relaxed">
              <p className="flex gap-3">
                Alley 62, Khuc Thua Du, Dich Vong Ward, Cau Giay District
              </p>
              <a
                href="tel:+84886392913"
                className="flex gap-3 hover:text-[#3c90fc] transition-colors"
              >
                (+84) 88.639.2913
              </a>
              <a
                href="mailto:support@innovision.com"
                className="flex gap-3 hover:text-[#3c90fc] transition-colors"
              >
                support@innovision.com
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((item) => (
                <li key={item.name} className="group w-fit">
                  <Link
                    href={item.href}
                    className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              Solutions
            </h4>
            <ul className="flex flex-col gap-4">
              {solutionLinks.map((item) => (
                <li key={item.name} className="group w-fit">
                  <Link
                    href={item.href}
                    className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI PRODUCTS */}
          <div>
            <h4 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              AI Products
            </h4>
            <ul className="flex flex-col gap-4">
              {aiProductLinks.map((item) => (
                <li key={item.name} className="group w-fit">
                  <Link
                    href={item.href}
                    className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#474363] text-[14px]">
              © {new Date().getFullYear()} Innovision. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
