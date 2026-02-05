"use client";

import { motion } from "framer-motion";
import { IconClock, IconStar, IconTrendingUp } from "./icons";

const OPTIONS = [
  { label: "Featured", Icon: IconStar },
  { label: "Latest", Icon: IconClock },
  { label: "Most Used", Icon: IconTrendingUp },
];

export default function SortToggle({ activeSort, onSortChange }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-softer rounded-2xl p-1.5">
      <div className="flex items-center gap-1.5">
        {OPTIONS.map(({ label, Icon }) => {
          const active = activeSort === label;

          return (
            <button
              key={label}
              onClick={() => onSortChange(label)}
              className="relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              {active && (
                <motion.span
                  layoutId="sort-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                />
              )}
              <span
                className={[
                  "relative z-10 flex items-center gap-2",
                  active
                    ? "text-white"
                    : "text-neutral-700 hover:text-neutral-900",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
