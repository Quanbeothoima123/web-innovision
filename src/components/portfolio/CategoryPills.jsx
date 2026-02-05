"use client";

import { motion } from "framer-motion";

export default function CategoryPills({
  tabs,
  activeTab,
  onTabChange,
  orientation = "horizontal", // "horizontal" | "vertical"
}) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={[
        "bg-white/70 backdrop-blur-xl border border-white/80 shadow-softer",
        isVertical ? "rounded-[28px] p-2 w-[80px]" : "rounded-full p-1.5",
      ].join(" ")}
    >
      <div
        className={[
          "relative flex gap-2",
          isVertical
            ? "flex-col items-center overflow-visible"
            : "items-center overflow-x-auto no-scrollbar",
        ].join(" ")}
      >
        {tabs.map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={[
                "relative rounded-full font-semibold transition-colors flex-shrink-0",
                isVertical
                  ? "w-[64px] min-h-[220px] py-5 px-0 text-[12px] leading-[1.35]"
                  : "px-4 md:px-5 py-2.5 text-sm whitespace-nowrap",
                active
                  ? "text-white"
                  : "text-neutral-700 hover:text-neutral-900",
              ].join(" ")}
            >
              {active && (
                <motion.span
                  layoutId={
                    isVertical ? "category-pill-vertical" : "category-pill"
                  }
                  className="absolute inset-0 rounded-full bg-neutral-900"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                />
              )}

              <span
                className={[
                  "relative z-10 w-full h-full flex items-center justify-center",
                  isVertical ? "pill-vertical-text" : "",
                ].join(" ")}
              >
                {tab}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
