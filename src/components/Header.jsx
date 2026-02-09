"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({ isScrolled = false }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Homepage", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Solutions", href: "/solutions" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  // Active rule: exact match or sub-route (vd: /portfolio/abc)
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full h-[70px] z-[1000] transition-all duration-300 flex items-center
      ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}
    >
      {/* Skip link (a11y + SEO best practice) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-[1100] bg-white text-black px-4 py-2 rounded-md shadow"
      >
        Skip to content
      </a>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-black font-bold">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Innovision homepage"
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/logo.svg"
            alt="Innovision logo"
            width={160}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-10">
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center"
          >
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <li
                    key={item.href}
                    className="flex flex-col items-center relative"
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`text-[15px] font-bold no-underline transition-opacity ${
                        active ? "text-black" : "text-black hover:opacity-70"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* Underline active */}
                    <div
                      aria-hidden="true"
                      className={`absolute -bottom-2 h-[2.5px] bg-[#3c90fc] transition-all duration-300 ${
                        active ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Language selector (semantic + a11y) */}
          <div className="flex items-center gap-2 cursor-pointer border border-black/10 px-3 py-1.5 rounded-full text-black">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="English"
              className="w-[18px] rounded-sm"
              loading="lazy"
            />
            <label htmlFor="site-language" className="sr-only">
              Language
            </label>
            <select
              id="site-language"
              name="language"
              aria-label="Select language"
              className="bg-transparent border-none font-bold text-[13px] outline-none cursor-pointer appearance-none"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
            </select>
            <span aria-hidden="true" className="text-[10px] opacity-50">
              ▼
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
