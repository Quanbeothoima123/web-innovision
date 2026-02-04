"use client";

import React from "react";

export default function Header({ isScrolled }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-[70px] z-[1000] transition-all duration-300 flex items-center 
      ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-black font-bold">
        <div className="flex items-center cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="h-10 object-contain" />
        </div>

        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-center relative">
              <a
                href="#"
                className="text-[15px] font-bold no-underline text-black"
              >
                Homepage
              </a>
              <div className="absolute -bottom-2 w-full h-[2.5px] bg-[#3c90fc]"></div>
            </div>

            {["About Us", "Solutions", "Portfolio"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[15px] font-bold text-black transition-opacity hover:opacity-70"
              >
                {item}
              </a>
            ))}
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
