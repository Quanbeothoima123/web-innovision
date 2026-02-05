"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ isScrolled }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Homepage", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Solutions", href: "/solutions" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  // Active rule: active nếu path trùng exact, hoặc là sub-route của nó (vd: /portfolio/abc)
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[70px] z-[1000] transition-all duration-300 flex items-center 
      ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-black font-bold">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="h-10 object-contain" />
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <div
                  key={item.href}
                  className="flex flex-col items-center relative"
                >
                  <Link
                    href={item.href}
                    className={`text-[15px] font-bold no-underline transition-opacity ${
                      active ? "text-black" : "text-black hover:opacity-70"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Underline active */}
                  <div
                    className={`absolute -bottom-2 h-[2.5px] bg-[#3c90fc] transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 cursor-pointer border border-black/10 px-3 py-1.5 rounded-full text-black">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="EN"
              className="w-[18px] rounded-sm"
            />
            <select className="bg-transparent border-none font-bold text-[13px] outline-none cursor-pointer appearance-none">
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
            </select>
            <span className="text-[10px] opacity-50">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
}
