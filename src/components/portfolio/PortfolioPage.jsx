"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LayoutGroup } from "framer-motion";

import BentoHero from "./BentoHero";
import CategoryRail from "./CategoryRail";
import CategoryPills from "./CategoryPills";
import SortToggle from "./SortToggle";
import BentoGrid from "./BentoGrid";

import { CATEGORIES, PROJECTS } from "./data";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All Project");
  const [activeSort, setActiveSort] = useState("Featured");

  // ref của “thanh tab ngang + sort”
  const controlsRef = useRef(null);

  // tab dọc chỉ bật khi controls đã “đi lên trên” và gần như không còn thấy
  const [showRail, setShowRail] = useState(false);

  useEffect(() => {
    const el = controlsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio ?? 0;
        const top = entry.boundingClientRect?.top ?? 0;

        // QUAN TRỌNG:
        // - Nếu controls đang ở DƯỚI viewport (top > 0) => chưa tới khu vực tab ngang => KHÔNG hiện tab dọc
        // - Chỉ khi controls đã cuộn LÊN TRÊN (top < 0) và ratio rất thấp => hiện tab dọc
        const isAboveViewport = top < 0;

        if (!isAboveViewport) {
          // chưa tới controls hoặc đang kéo lên lại
          setShowRail(false);
          return;
        }

        // Hysteresis để tránh nhấp nháy:
        // - Hiện rail khi gần như mất hẳn (<= 5%)
        // - Ẩn rail khi thấy lại đủ rõ (>= 35%)
        if (ratio <= 0.05) setShowRail(true);
        else if (ratio >= 0.35) setShowRail(false);
      },
      {
        threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 1],
        // Nếu bạn có header fixed, có thể đổi thành: rootMargin: "-72px 0px 0px 0px"
        rootMargin: "0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredSorted = useMemo(() => {
    const filtered =
      activeTab === "All Project"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeTab);

    const sorted = [...filtered].sort((a, b) => {
      if (activeSort === "Featured") {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (activeSort === "Latest") {
        return String(b.date || "").localeCompare(String(a.date || ""));
      }
      // Most Used
      return (b.usage || 0) - (a.usage || 0);
    });

    return sorted;
  }, [activeTab, activeSort]);

  return (
    <LayoutGroup>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
        <BentoHero />

        {/* ✅ TAB DỌC: CHỈ HIỆN KHI TAB NGANG ĐÃ CUỘN MẤT (đi lên trên viewport) */}
        {showRail && (
          <CategoryRail
            tabs={CATEGORIES}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        )}

        {/* ✅ Controls row: KHÔNG sticky, cuộn là mất */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <div
            ref={controlsRef}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-10"
          >
            <CategoryPills
              tabs={CATEGORIES}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            <SortToggle activeSort={activeSort} onSortChange={setActiveSort} />
          </div>
        </section>

        <BentoGrid projects={filteredSorted} />
      </div>
    </LayoutGroup>
  );
}
