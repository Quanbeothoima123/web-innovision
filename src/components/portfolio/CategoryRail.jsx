"use client";

import { motion } from "framer-motion";

export default function CategoryRail({ tabs, activeTab, onTabChange }) {
  return (
    <div className="hidden lg:block">
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-soft px-3 py-4">
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => {
              const active = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={[
                    "relative w-14 h-28 rounded-full flex items-center justify-center",
                    "transition-colors",
                    active
                      ? "text-white"
                      : "text-neutral-800 hover:text-neutral-900",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="category-rail"
                      className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-600 to-purple-600"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* rotate text giống Figma (không dùng writing-mode để tránh “chữ đứng dựng”) */}
                  <span
                    className={[
                      "relative z-10 text-sm font-semibold whitespace-nowrap",
                      "transform -rotate-90 select-none",
                    ].join(" ")}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
